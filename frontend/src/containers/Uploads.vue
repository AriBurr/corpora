<template>
  <StyledDiv flexDirection="row" height="100%" alignItems="flex-start" minHeight="700px">
    <StyledDiv width="50%">
      <StyledHeader>Corpora Upload</StyledHeader>
      <LanguageSelect
        v-model="selectedLanguage"
        :languages="languages"
        @languageSelection="languageSelection"
        passedTitle="Select a Language to upload:"
      />
      <StyledDiv v-if="selectedLanguage===`add`">
        <AddLanguage :handleAddLanguage="handleAddLanguage"/>
      </StyledDiv>
      <StyledDiv v-if=" selectedLanguage !== `add`">
        <StyledSubHeader :fontSize="styled(`fontSize-mediumSmall`)">How will you upload files?</StyledSubHeader>
        <StyledDiv flexDirection="row" width="50%" margin="20px 0">
          <RadioButton
            v-model="uploadType"
            :passedFunc="uploadTypeSelection"
            passedName="uploadType"
            passedTitle="Copy/Paste URL"
            passedValue="1"
            type="radio"
          />
          <RadioButton
            type="radio"
            v-model="uploadType"
            :passedFunc="uploadTypeSelection"
            passedName="uploadType"
            passedTitle="Upload File(s)"
            passedValue="2"
          />
        </StyledDiv>
      </StyledDiv>

      <URLUpload
        v-if="uploadType === 1"
        @handleURLUpload="handleURLUpload"
        v-model="uploadedItem"
        :selectedLanguage="selectedLanguage"
      />
      <FileUpload
        ref="files"
        v-if="uploadType === 2"
        :selectedLanguage="selectedLanguage"
        @handleFileUpload="handleFileUpload"
        :filesToUpload="filesToUpload"
        :submitFile="submitFile"
      />
      <StyledDiv margin="10px auto">
        <StyledButton
          v-if="uploadType === 2 && filesToUpload.length > 0"
          width="50%"
          v-on:click="submitFile()"
        >Upload</StyledButton>
      </StyledDiv>
      <ListFileUploads
        v-if="uploadType === 2 && filesToUpload.length > 0"
        :filesToUpload="filesToUpload"
        removeButton="true"
        :removeUploadedFile="removeUploadedFile"
      />
    </StyledDiv>
    <StyledDiv width="3px" height="400px" margin="auto 0" :backgroundColor="styled(`darkBlue`)"/>
    <StyledDiv width="50%" justifyContent="flex-start">
      <RecentlyAdded
        :recentlyAdded="recentlyAdded"
        removeButton="false"
        :removeUploadedFile="removeUploadedFile"
      />
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import axios from "axios";

import LanguageSelect from "../components/uploads/LanguageSelect";
import URLUpload from "../components/uploads/URLUpload";
import FileUpload from "../components/uploads/FileUpload";
import AddLanguage from "../components/uploads/AddLanguage";
import RadioButton from "../components/generics/RadioButton";
import RecentlyAdded from "../components/uploads/RecentlyAdded";
import ListFileUploads from "../components/uploads/ListFileUpload";
import {
  StyledHeader,
  StyledDiv,
  StyledButton,
  StyledSubHeader,
  ReadStyleGuide
} from "../components/styled/index";
import StyleCompiler from "../helpers/StyleCompiler";

export default {
  components: {
    LanguageSelect,
    RecentlyAdded,
    RadioButton,
    URLUpload,
    AddLanguage,
    FileUpload,
    ListFileUploads,
    StyledDiv,
    StyledHeader,
    StyledSubHeader,
    StyledButton
  },
  data() {
    return {
      uploadedItem: "",
      uploadType: null,
      selectedLanguage: false,
      languages: [],
      filesToUpload: [],
      recentlyAdded: []
    };
  },
  mounted() {
    axios.get("/languages").then(r => {
      this.languages = r.data;
      this.languages.unshift({ id: "add", name: "Add Language" });
    });
  },
  methods: {
    handleAddLanguage(e) {
      axios
        .post("/add_language/", { language_name: e })
        .then(r => {
          this.language.push(r.data);
          this.selectedLanguage = "";
        })
        .catch(a => {
          console.log("bummer");
          this.selectedLanguage = "";
        });
    },
    languageSelection(e) {
      this.selectedLanguage = e;
    },
    uploadTypeSelection(e) {
      this.uploadType = parseInt(e);
    },
    handleURLUpload(item, title, cb) {
      axios
        .post("/upload_url/", {
          title: title,
          url: item,
          language_id: this.selectedLanguage
        })
        .then(r => {
          this.$store.commit(
            "setFlash",
            {
              message: r.data.title,
              status: r.status
            },
            this.addAndDelete(r.data, cb)
          );
        })
        .catch(r => {
          this.$store.commit("setFlash", {
            message: r,
            status: 500
          });
        }, cb && cb());
    },
    handleFileUpload(files) {
      for (var i = 0; i < files.length; i++) {
        this.filesToUpload.push({
          file: files[i],
          title: files[i].name,
          file_type: files[i].type,
          language_id: parseInt(this.selectedLanguage)
        });
      }
    },
    removeUploadedFile(key) {
      this.filesToUpload.splice(key, 1);
    },
    submitFile() {
      for (var i = 0; i < this.filesToUpload.length; i++) {
        let formData = new FormData();
        formData.append("file", this.filesToUpload[i].file);
        formData.append("title", this.filesToUpload[i].title);
        formData.append("file_type", this.filesToUpload[i].file_type);
        formData.append("language_id", parseInt(this.selectedLanguage));
        axios
          .post("/upload_file/", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(r => {
            this.$store.commit(
              "setFlash",
              {
                message: r.data.title,
                status: r.status
              },
              this.addAndDelete(r.data)
            );
          })
          .catch(r => {
            this.$store.commit("setFlash", {
              message: r.data.title,
              status: r.status
            });
          });
      }
      return;
    },
    addAndDelete(r, cb) {
      this.filesToUpload = this.filesToUpload.filter(single => {
        single.title !== r.title;
      });
      this.recentlyAdded.push(r);
      cb && cb();
    },
    styled(e) {
      return StyleCompiler(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.uploads-header {
  padding: 10px;
  font-size: 4em;
}
.lang-select-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.lang-select-header {
  font-size: 2.5em;
}
</style>
