/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => InlineEncrypterPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/ModalPassword.ts
var import_obsidian = require("obsidian");
var ModalPassword = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Enter password" });
    new import_obsidian.Setting(contentEl).setName("Password").addText((text) => {
      text.inputEl.type = "password";
      text.onChange((value) => this.password = value);
    });
    new import_obsidian.Setting(contentEl).addButton((btn) => btn.setButtonText("OK").setCta().onClick(() => {
      this.isPassword = true;
      this.close();
    }));
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/ModalDecrypt.ts
var import_obsidian2 = require("obsidian");
var ModalDecrypt = class extends import_obsidian2.Modal {
  constructor(app, text = "") {
    super(app);
    this.text = text;
  }
  onOpen() {
    var _a;
    const { contentEl } = this;
    contentEl.empty();
    contentEl.classList.add("inline-encrypter-decrypt-modal");
    contentEl.createEl("h1", { text: "Decrypted secret" });
    let textArea;
    const textVal = new import_obsidian2.Setting(contentEl).addTextArea((cb) => {
      textArea = cb;
      cb.setValue(this.text);
      cb.inputEl.setSelectionRange(0, 0);
      cb.inputEl.readOnly = true;
      cb.inputEl.rows = 10;
    });
    (_a = textVal.settingEl.querySelector(".setting-item-info")) == null ? void 0 : _a.remove();
    const buttons = new import_obsidian2.Setting(contentEl);
    buttons.addButton((cb) => {
      cb.setButtonText("Copy to clipboard").onClick((evt) => {
        navigator.clipboard.writeText(textArea.getValue());
        new import_obsidian2.Notice("Secret copied");
      });
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/CryptoFactory.ts
var CryptoFactory = class {
  constructor(vectorSize, saltSize, iterations) {
    this.vectorSize = vectorSize;
    this.saltSize = saltSize;
    this.iterations = iterations;
  }
  convertArrayToString(bytes) {
    let result = "";
    for (let i = 0; i < bytes.length; i++) {
      result += String.fromCharCode(bytes[i]);
    }
    return result;
  }
  convertStringToArray(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i));
    }
    return new Uint8Array(result);
  }
  async deriveKey(password, salt) {
    const utf8Encoder = new TextEncoder();
    const keyData = utf8Encoder.encode(password);
    const key = await crypto.subtle.importKey("raw", keyData, { name: "PBKDF2" }, false, ["deriveKey"]);
    const privateKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        hash: { name: "SHA-512" },
        salt,
        iterations: this.iterations
      },
      key,
      {
        name: "AES-GCM",
        length: 256
      },
      false,
      ["encrypt", "decrypt"]
    );
    return privateKey;
  }
  async encryptToBytes(text, password) {
    const salt = crypto.getRandomValues(new Uint8Array(this.saltSize));
    const key = await this.deriveKey(password, salt);
    const utf8Encoder = new TextEncoder();
    const textBytesToEncrypt = utf8Encoder.encode(text);
    const vector = crypto.getRandomValues(new Uint8Array(this.vectorSize));
    const encryptedBytes = new Uint8Array(
      await crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: vector
        },
        key,
        textBytesToEncrypt
      )
    );
    const finalBytes = new Uint8Array(vector.byteLength + salt.byteLength + encryptedBytes.byteLength);
    finalBytes.set(vector, 0);
    finalBytes.set(salt, vector.byteLength);
    finalBytes.set(encryptedBytes, vector.byteLength + salt.byteLength);
    return finalBytes;
  }
  async encryptToBase64(text, password) {
    const finalBytes = await this.encryptToBytes(text, password);
    const base64Text = btoa(this.convertArrayToString(finalBytes));
    return base64Text;
  }
  async decryptFromBytes(encryptedBytes, password) {
    try {
      let offset;
      let nextOffset;
      offset = 0;
      nextOffset = offset + this.vectorSize;
      const vector = encryptedBytes.slice(offset, nextOffset);
      offset = nextOffset;
      nextOffset = offset + this.saltSize;
      const salt = encryptedBytes.slice(offset, nextOffset);
      offset = nextOffset;
      nextOffset = void 0;
      const encryptedTextBytes = encryptedBytes.slice(offset);
      const key = await this.deriveKey(password, salt);
      const decryptedBytes = await crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: vector
        },
        key,
        encryptedTextBytes
      );
      const utf8Decoder = new TextDecoder();
      const decryptedText = utf8Decoder.decode(decryptedBytes);
      return decryptedText;
    } catch (e) {
      return null;
    }
  }
  async decryptFromBase64(base64Encoded, password) {
    try {
      const bytesToDecode = this.convertStringToArray(atob(base64Encoded));
      return await this.decryptFromBytes(bytesToDecode, password);
    } catch (e) {
      return null;
    }
  }
};

// src/Constants.ts
var ENCRYPTED_CODE_PREFIX = "secret ";

// src/main.ts
var InlineEncrypterPlugin = class extends import_obsidian3.Plugin {
  constructor() {
    super(...arguments);
    this.cryptoFactory = new CryptoFactory(16, 16, 262144);
  }
  async onload() {
    this.registerMarkdownPostProcessor((el, ctx) => this.processEncryptedCodeBlockProcessor(el, ctx));
    this.addCommand({
      id: "encrypt",
      name: "Encrypt selected text",
      icon: "lock",
      editorCallback: (editor, view) => this.processInlineEncryptCommand(editor)
    });
    this.addCommand({
      id: "decrypt",
      name: "Decrypt selected text",
      icon: "lock",
      editorCallback: (editor, view) => this.processInlineDecryptCommand(editor)
    });
    console.log("Inline Encrypter plugin loaded");
  }
  onunload() {
    console.log("Inline Encrypter plugin unloaded");
  }
  async processInlineEncryptCommand(editor) {
    if (editor.somethingSelected()) {
      const input = editor.getSelection();
      const passModal = new ModalPassword(this.app);
      passModal.onClose = async () => {
        if (!passModal.isPassword) {
          return;
        }
        const output = await this.cryptoFactory.encryptToBase64(input, passModal.password);
        editor.replaceSelection("`" + ENCRYPTED_CODE_PREFIX + output + "`");
        new import_obsidian3.Notice("\u2705 Text encrypted");
      };
      passModal.open();
    } else {
      new import_obsidian3.Notice("\u274C No selected text for encryption");
    }
  }
  async processInlineDecryptCommand(editor) {
    if (editor.somethingSelected()) {
      let input = editor.getSelection();
      const passModal = new ModalPassword(this.app);
      passModal.onClose = async () => {
        if (!passModal.isPassword) {
          return;
        }
        input = input.replace("`", "").replace(ENCRYPTED_CODE_PREFIX, "").replace("`", "");
        const output = await this.cryptoFactory.decryptFromBase64(input, passModal.password);
        if (output === null) {
          new import_obsidian3.Notice("\u274C Decryption failed!");
          return;
        } else {
          editor.replaceSelection(output);
          new import_obsidian3.Notice("\u2705 Text decrypted");
        }
      };
      passModal.open();
    } else {
      new import_obsidian3.Notice("\u274C No selected text for decryption");
    }
  }
  processEncryptedCodeBlockProcessor(el, ctx) {
    const codeblocks = el.querySelectorAll("code");
    for (let i = 0; i < codeblocks.length; i++) {
      const codeblock = codeblocks.item(i);
      const text = codeblock.innerText.trim();
      const isEncrypted = text.indexOf(ENCRYPTED_CODE_PREFIX) === 0;
      if (isEncrypted) {
        codeblock.innerText = "";
        codeblock.createEl("a", { cls: "inline-encrypter-code" });
        codeblock.onClickEvent((event) => this.handleDecryptClick(event, text));
      }
    }
  }
  handleDecryptClick(event, input) {
    event.preventDefault();
    const passModal = new ModalPassword(this.app);
    passModal.onClose = async () => {
      if (!passModal.isPassword) {
        return;
      }
      input = input.replace(ENCRYPTED_CODE_PREFIX, "");
      const output = await this.cryptoFactory.decryptFromBase64(input, passModal.password);
      if (output === null) {
        new import_obsidian3.Notice("\u274C Decryption failed!");
        return;
      } else {
        new ModalDecrypt(this.app, output).open();
      }
    };
    passModal.open();
  }
};