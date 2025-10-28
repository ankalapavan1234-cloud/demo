# How to Add Your Own Images and SVG Files

## 📁 Folder Structure

```
web/
├── public/
│   └── images/              # For static images (logos, favicons)
│       └── logo.png
│       └── favicon.ico
│
├── src/
    └── assets/
        ├── images/          # For imported images (backgrounds, photos)
        │   └── hero-bg.jpg
        │   └── team-photo.jpg
        │
        └── svg/             # For SVG files
            └── icon.svg
            └── illustration.svg
```

---

## 🎨 Two Ways to Use Images

### **Method 1: Using `public/` folder (For static assets)**

**Best for:** Logos, favicons, static images that don't change

**Steps:**
1. Place your image in `public/images/` folder
2. Reference it directly in your code with `/images/filename.ext`

**Example:**
```jsx
// In any component
<img src="/images/logo.png" alt="Logo" />

// In CSS
background-image: url('/images/hero-bg.jpg');
```

---

### **Method 2: Using `src/assets/` folder (For imported assets)**

**Best for:** Images that need optimization, images used in components

**Steps:**
1. Place your image in `src/assets/images/` folder
2. Import it in your component
3. Use the imported variable

**Example:**
```jsx
// Import at the top of your component
import heroImage from '../assets/images/hero-bg.jpg';
import teamPhoto from '../assets/images/team-photo.jpg';

// Use in JSX
function Hero() {
  return (
    <div>
      <img src={heroImage} alt="Hero Background" />
      <img src={teamPhoto} alt="Team" />
    </div>
  );
}
```

---

## 🖼️ How to Add Images to Your Project

### **Step 1: Add your image files**

Copy your image files to the appropriate folder:

**For logos/static images:**
- Copy to: `web/public/images/`
- Example: `logo.png`, `favicon.ico`

**For backgrounds/photos:**
- Copy to: `web/src/assets/images/`
- Example: `hero-bg.jpg`, `about-bg.jpg`, `team-photo.jpg`

**For SVG icons:**
- Copy to: `web/src/assets/svg/`
- Example: `icon.svg`, `illustration.svg`

---

### **Step 2: Use in your components**

**Example 1: Replace Hero Background Image**

Current Hero.jsx uses Unsplash URL. Replace it with your own:

```jsx
// OLD (using Unsplash)
<img 
  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" 
  alt="Student Community" 
/>

// NEW (using your own image from public folder)
<img 
  src="/images/hero-background.jpg" 
  alt="Student Community" 
/>

// OR (using imported image)
import heroBg from '../assets/images/hero-background.jpg';

<img 
  src={heroBg} 
  alt="Student Community" 
/>
```

**Example 2: Add Logo to Navbar**

```jsx
// In Navbar.jsx
import logo from '../assets/images/logo.png';

<img src={logo} alt="Logo" className="h-10 w-auto" />

// OR using public folder
<img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
```

**Example 3: Add Team Member Photos**

```jsx
// In Team.jsx
import member1 from '../assets/images/team/member1.jpg';
import member2 from '../assets/images/team/member2.jpg';

const teamMembers = [
  {
    name: "John Doe",
    image: member1,
    role: "President"
  },
  {
    name: "Jane Smith",
    image: member2,
    role: "Vice President"
  }
];
```

---

## 🎭 How to Add SVG Files

### **Option 1: Import as Image**

```jsx
import myIcon from '../assets/svg/icon.svg';

<img src={myIcon} alt="Icon" className="w-6 h-6" />
```

### **Option 2: Inline SVG (Recommended for icons)**

```jsx
// Copy the SVG code directly into your JSX
<svg className="w-6 h-6" viewBox="0 0 24 24">
  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
</svg>
```

### **Option 3: Import as React Component (Advanced)**

Install SVGR (already included in Vite):

```jsx
import { ReactComponent as MyIcon } from '../assets/svg/icon.svg';

<MyIcon className="w-6 h-6 text-blue-500" />
```

---

## 📝 Supported Image Formats

- **Images:** `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`
- **Icons:** `.svg`, `.png` (transparent)
- **Favicon:** `.ico`, `.png`, `.svg`

---

## 🔧 Optimization Tips

1. **Compress images** before adding them:
   - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   
2. **Use appropriate formats:**
   - Photos: `.jpg` or `.webp`
   - Graphics/icons with transparency: `.png` or `.svg`
   - Simple icons: `.svg` (smallest file size, scales perfectly)

3. **Recommended image sizes:**
   - Hero backgrounds: 1920x1080px or larger
   - Team photos: 400x400px (square)
   - Logos: 200x200px minimum (or use SVG)
   - Thumbnails: 300x200px

---

## 🚀 Quick Example: Replace All Images

1. **Create folder structure** (already done!)

2. **Copy your files:**
```
public/images/
  ├── logo.png
  └── favicon.ico

src/assets/images/
  ├── hero-bg.jpg
  ├── about-bg.jpg
  └── team/
      ├── member1.jpg
      ├── member2.jpg
      └── member3.jpg
```

3. **Update Hero.jsx:**
```jsx
// Replace the background image
<img 
  src="/images/hero-bg.jpg" 
  alt="Student Community" 
  className="w-full h-full object-cover"
/>
```

4. **Update Navbar.jsx:**
```jsx
// Add logo
<img src="/images/logo.png" alt="Logo" className="h-10" />
```

---

## ❓ Common Questions

**Q: Should I use `public/` or `src/assets/`?**
- Use `public/` for: logos, favicons, static files that don't change
- Use `src/assets/` for: images that need optimization, images imported in components

**Q: Why import images in React?**
- Vite/Webpack optimizes imported images (compression, lazy loading)
- Get automatic cache busting (filename changes on updates)
- Tree shaking removes unused images

**Q: Can I use external URLs?**
- Yes, but it's slower and depends on external services
- Better to download and host images locally

---

## ✅ Next Steps

1. Copy your images to the appropriate folders
2. Replace the Unsplash URLs in `Hero.jsx` with your images
3. Add your logo to `Navbar.jsx`
4. Update team member photos in `Team.jsx`
5. Add favicon to `public/`

Need help? Check the examples in the code!
