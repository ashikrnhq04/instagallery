# 🖼️ React Image Gallery Viewer

A responsive image gallery component built with **React**, featuring:

- Keyboard navigation (`ArrowLeft`, `ArrowRight`)
- Previous/Next navigation buttons
- Optional looping behavior
- Clickable image thumbnails
- Scrollable thumbnail preview strip
- Responsive design and accessibility support

---

## 🚀 Features

- ✅ Navigate through images using left/right arrows on the keyboard
- ✅ Loop through gallery (configurable)
- ✅ Thumbnails images (configurable)
- ✅ Click thumbnails to change the main image
- ✅ Responsive design with modern styling, TailwindCSS supported.
- ✅ Accessible (`tabIndex` support, keyboard operable)

---

## 📦 Installation

Clone the repo and install dependencies:

```
git clone https://github.com/your-username/react-image-gallery.git
cd react-image-gallery
npm install
```

# Usage

import GalleryViewer from './components/GalleryViewer';

const images = [
'/images/photo1.jpg',
'/images/photo2.jpg',
'/images/photo3.jpg',
];

```
export default function App() {
return <GalleryViewer galleryImages={images} loop={true} gridAll={true} />;
}
```

| Prop            | Type       | Default      | Description                               |
| --------------- | ---------- | ------------ | ----------------------------------------- |
| `galleryImages` | `string[]` | **Required** | Array of image URLs to display            |
| `loop`          | `boolean`  | `false`      | Whether to loop around on next/prev click |
| `gridAll`       | `boolean`  | `true`       | Show/hide thumbnail preview strip         |

# Development

`npm run dev`

### One noticiable issue

On clicking a thumbnail, the image will be in viewer and following that, the prev/next button may not work properly. I'll handle this in future update.

![screenshot](screenshot/image-gallery.png)
