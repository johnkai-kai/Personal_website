---
name: update-contact
description: 更新網站聯絡資訊 (Email、電話)。當用戶要求修改聯絡方式時使用此 Skill。
---

# 更新聯絡資訊

此 Skill 指導如何更新 Personal Website 的聯絡資訊。

## 檔案位置

- **HTML**: `index.html` (第 255-268 行附近，`#contact` 區塊)

## 當前結構

```html
<div class="contact-links">
    <div class="contact-link copy-item" data-value="EMAIL_VALUE" style="cursor: pointer;" title="Click to copy">
        <div class="contact-info">✉️ Email: EMAIL_DISPLAY</div>
        <small class="copy-hint">📋 Click to Copy</small>
    </div>
    <div class="contact-link copy-item" data-value="PHONE_VALUE" style="cursor: pointer;" title="Click to copy">
        <div class="contact-info">📞 Phone: PHONE_DISPLAY</div>
        <small class="copy-hint">📋 Click to Copy</small>
    </div>
</div>
```

## 更新步驟

### 更新 Email

1. 找到 `data-value="6304john@gmail.com"`
2. 同時修改兩處：
   - `data-value="新的Email"`
   - `Email: 新的Email`

### 更新電話

1. 找到 `data-value="0907370007"`
2. 同時修改兩處：
   - `data-value="新的電話"`
   - `Phone: 新的電話`

## 重要提醒

⚠️ **必須同步修改 `data-value` 和顯示文字**

`data-value` 是複製到剪貼簿的內容，顯示文字是用戶看到的內容。兩者必須一致。

## 新增其他聯絡方式

### 新增 LinkedIn

```html
<div class="contact-link copy-item" data-value="https://linkedin.com/in/your-profile" style="cursor: pointer;" title="Click to copy">
    <div class="contact-info">💼 LinkedIn: your-profile</div>
    <small class="copy-hint">📋 Click to Copy</small>
</div>
```

### 新增 GitHub

```html
<div class="contact-link copy-item" data-value="https://github.com/your-username" style="cursor: pointer;" title="Click to copy">
    <div class="contact-info">🐙 GitHub: your-username</div>
    <small class="copy-hint">📋 Click to Copy</small>
</div>
```

## 移除點擊複製功能

如果希望改用傳統連結 (點擊後開啟郵件/撥號)：

```html
<a href="mailto:your@email.com" class="contact-link">
    <div class="contact-info">✉️ Email: your@email.com</div>
</a>
```

## 驗證

1. 重新整理瀏覽器
2. 點擊聯絡資訊區塊
3. 確認顯示「✅ Copied!」
4. 在其他地方貼上，確認內容正確
