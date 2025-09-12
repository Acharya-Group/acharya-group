import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin } from "react-icons/fi";



// nav dropdowns
export const navdropdowns = [
  {
    title: "About Us",
    links: [
      { name: "About Us", href: "/about", type: "link" },
      { name: "Director's Message", href: "/directors-message", type: "link" },
      { name: "Our Team", href: "/team", type: "link" },
    ],
  },
  {
    title: "Projects",
    links: [
      { name: "Shopneo", href: "/shopneo", type: "link" },
      { name: "e-Mitra", href: "/e-mitra", type: "link" },
      { name: "Kiosk Banking/BankBc", href: "/kiosk-banking", type: "link" },
      { name: "Atpl Drone", href: "/atpl-drone", type: "link" },
      { name: "RKCL", href: "/rkcl", type: "link" },
      { name: "School Easy", href: "/school-easy", type: "link" },
      { name: "Paytm Registration", href: "/paytm-registration", type: "link" },
    ],
  },
  {
    title: "Downloads",
    links: [
      { name: "Cogent Driver", href: "/files/cogent.zip", type: "download" },
      { name: "Mantra Iris Driver", href: "/files/MMantra_Iris.zip", type: "download" },
      { name: "Mantra MFS100 Driver", href: "/files/Mantra_MFS100.zip", type: "download" },
      { name: "Mantra MFS110 Driver", href: "/files/Mantra_MFS110.zip", type: "download" },
      { name: "Morpho Driver", href: "/files/morpho.zip", type: "download" },
      { name: "Starteck Driver", href: "/files/starteck.zip", type: "download" },
      { name: "Kiosks Identity Card", href: "/downloads/Kiosk-id-card", type: "link" },
      { name: "E-Mitra Services Forms", href: "/downloads/e-mitra-services", type: "link" },
      { name: "Application Form For New e-Mitra Kiosk", href: "/files/Application Form For New e-Mitra Kiosk.pdf", type: "download" },
      { name: "RMGB Installation Process", href: "/files/rmgb_installation.docs", type: "download" },
      { name: "Windows RD Service V2.0.1", href: "/files/Windows_RDService_V2.0.1.42_HTTPs_127.0.0.1.zip", type: "download" },
      { name: "BOB Morpho MSO 1300 Esetup", href: "/files/BOB_MorphoMSO1300Esetup 2.2.1.8_06July2017.zip", type: "download" },
    ],
  },
];

// gallery items
export interface GalleryItem {
  id: number;
  image: string;
  category: number;
  videoLink?: string;
}

export const galleryItems: GalleryItem[] = [
    // Tab 2 - Gallery (27 images)
  { id: 1, image: "/images/gallery/gallery-1.jpg", category: 2 },
  { id: 2, image: "/images/gallery/gallery-2.jpg", category: 2 },
  { id: 3, image: "/images/gallery/gallery-3.jpg", category: 2 },
  { id: 4, image: "/images/gallery/gallery-4.jpg", category: 2 },
  { id: 5, image: "/images/gallery/gallery-5.jpg", category: 2 },
  { id: 6, image: "/images/gallery/gallery-6.jpg", category: 2 },
  { id: 7, image: "/images/gallery/gallery-7.jpg", category: 2 },
  { id: 8, image: "/images/gallery/gallery-8.jpg", category: 2 },
  { id: 9, image: "/images/gallery/gallery-9.jpg", category: 2 },
  { id: 10, image: "/images/gallery/gallery-10.jpg", category: 2 },
  { id: 11, image: "/images/gallery/gallery-11.jpg", category: 2 },
  { id: 12, image: "/images/gallery/gallery-12.jpg", category: 2 },
  { id: 13, image: "/images/gallery/gallery-13.jpg", category: 2 },
  { id: 14, image: "/images/gallery/gallery-14.jpg", category: 2 },
  { id: 15, image: "/images/gallery/gallery-15.jpg", category: 2 },
  { id: 16, image: "/images/gallery/gallery-16.jpg", category: 2 },
  { id: 17, image: "/images/gallery/gallery-17.jpg", category: 2 },
  { id: 18, image: "/images/gallery/gallery-18.jpg", category: 2 },
  { id: 19, image: "/images/gallery/gallery-19.jpg", category: 2 },
  { id: 20, image: "/images/gallery/gallery-20.jpg", category: 2 },
  { id: 21, image: "/images/gallery/gallery-21.jpg", category: 2 },
  { id: 22, image: "/images/gallery/gallery-22.jpg", category: 2 },
  { id: 23, image: "/images/gallery/gallery-23.jpg", category: 2 },
  { id: 24, image: "/images/gallery/gallery-24.jpg", category: 2 },
  { id: 25, image: "/images/gallery/gallery-25.jpg", category: 2 },
  { id: 26, image: "/images/gallery/gallery-26.jpg", category: 2 },
  { id: 29, image: "/images/gallery/gallery-27.jpg", category: 2 },
]

export const videoItems: GalleryItem[] = [
  // Tab 1 - Videos
 { id: 1, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/y-zZFo0swDc" },
  { id: 2, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/TpQHUAlGLT4" },
  { id: 3, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/3yhES9h9rgA" },
  { id: 4, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/cxWG7IpOzhA" },
  { id: 5, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/dijD48rh40Q" },
  { id: 6, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/w-ZJuxsY_dQ" },
  { id: 7, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/KXqC6LGJwfk" },
  { id: 8, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/iActA7dMuh8" },
  { id: 9, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/ieN_cSxM8ic" },
  { id: 10, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/_1rHsy2vIr4" },
  { id: 11, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/5MnCL9XpWnY" },
  { id: 12, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/AuYu2MIzl1k" },
  { id: 13, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/Y2Ji1fjDT2M" },
  { id: 14, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/zwPGqBhljp4" },
  { id: 15, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/1rzIw7cr4NY" },
  { id: 16, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/l5_YgzTVAcE" },
  { id: 17, image:"null", category: 1, videoLink: "https://www.youtube/embed/dEmNiC8hUz0" },
  { id: 18, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/SZMrN5NB8kc" },
  { id: 19, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/J6DwaGEIq-E" },
  { id: 20, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/n2a4vOTu4LI" },
  { id: 21, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/PEvhND9_oTE" },
  { id: 22, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/g9TFlGyXZ9k" },
  { id: 23, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/i1MsuFCHxeE" },
  { id: 24, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/msP3n03_YK0" },
  { id: 25, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/vqaOZokE-Ak" },
  { id: 26, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/McQ4BPPRZJI" },
  { id: 27, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/T4DpAeHEQbc" },
  { id: 28, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/5EUZdLztvqs" },
  { id: 29, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/dtXz-UMYfE8" },
  { id: 30, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/5EUZdLztvqs" },
  { id: 31, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/fsIgL2wPn7g" },
  { id: 32, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/v1YEGlSpdxs" },
  { id: 33, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/Hh6HpYOpZs0" },
  { id: 34, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/j5-akW_Imuk" },
  { id: 35, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/1P_qvj8PFx8" },
  { id: 36, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/5CXPDSdtZjo" },
  { id: 37, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/GRvIpmP9Uew" },
  { id: 38, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/zgfV_xvKbtU" },
  { id: 39, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/sZxFPjpa0Gg" },
  { id: 40, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/Dc8_fBeyJ-8" },
  { id: 41, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/-iOfW7CnsZA" },
  { id: 42, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/GdrJ_f506cM" },
  { id: 43, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/tb9igyFiTcU" },
  { id: 44, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/JTzWxALHN4A" },
  { id: 45, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/wGFWGV5BtCU" },
  { id: 46, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/X449t_SvWyI" },
  { id: 47, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/qOsey3HPbO8" },
  { id: 48, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/Eb9tksS9VKA" },
  { id: 49, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/gz9R9NIVVU4" },
  { id: 50, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/1Fvdbdf1MWg" },
  { id: 51, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/VE-xc3t8cC8" },
  { id: 52, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/euZEaxKVDeI" },
  { id: 53, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/hO94qFoYpII" },
  { id: 54, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/SLMNyseuKBI" },
  { id: 55, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/r6Z-qTC9y5A" },
  { id: 56, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/CoraiYuyPUw" },
  { id: 57, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/MFzka_XUY34" },
  { id: 58, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/7QPk4rUYwxc" },
  { id: 59, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/vGHR0Q3wmCk" },
  { id: 60, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/M3VK67CZbno" },
  { id: 61, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/g94dqtLgrHA" },
  { id: 62, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/3g4M4AtmLxc" },
  { id: 63, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/gSvoO14RwZ0" },
  { id: 64, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/2-ozUst2LMQ" },
  { id: 65, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/0GQVmYTWsbc" },
  { id: 66, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/QQiaHlqvCZc" },
  { id: 67, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/BMlmQQRnNSE" },
  { id: 68, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/bbbPkd39Zj4" },
  { id: 69, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/nVh7fRW4zms" },
  { id: 70, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/k1CcGqcu1xo" },
  { id: 71, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/Zpw4icEiPX4" },
  { id: 72, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/XYKebmva06E" },
  { id: 73, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/IWHrKqUX8yk" },
  { id: 74, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/QKZ5Y1AJWS0" },
  { id: 75, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/HW9Bj9e9E7o" },
  { id: 76, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/iNVHzzaS8Uc" },
  { id: 77, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/AvgCe370XS0" },
  { id: 78, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/P93GNSrNT7Y" },
  { id: 79, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/4Sen9J-PnnQ" },
  { id: 80, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/q84p7f7cGDA" },
  { id: 81, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/INw6YBfkKsE" },
  { id: 82, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/WfpTrcGBni4" },
  { id: 83, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/8pxyeLnj2iY" },
  { id: 84, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/yG0ZpD6cHV4" },
  { id: 85, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/KjbJUeP8LAk" },
  { id: 86, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/wXp_uSOFhlw" },
  { id: 87, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/Vg9EBgFVk9g" },
  { id: 88, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/U_N10tojcoU" },
  { id: 89, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/0j9tChKJNHo" },
  { id: 90, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/RwD8M6LpaF0" },
  { id: 91, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/Xn0_FZ3Qfo8" },
  { id: 92, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/kxll3q_TTKk" },
  { id: 93, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/6q_86d3TAXE" },
  { id: 94, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/quKwIxzRZ0U" },
  { id: 95, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/NnDhik59B4w" },
  { id: 96, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/d8CJjTARAlI" },
  { id: 97, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/ONQAeuoxW5I" },
  { id: 98, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/DYRzhXbMKdQ" },
  { id: 99, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/TyhcCA4B-Zk" },
  { id: 100, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/olUp4qnt5YU" },
  { id: 101, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/O-Rin3dE8c4" },
  { id: 102, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/0DrkAE2Z_f8" },
  { id: 103, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/eRLRaXZKX1I" },
  { id: 104, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/MaMjsdBECu8" },
  { id: 105, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/BWLzT8uT0Z8" },
  { id: 106, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/oia94UvfTjg" },
  { id: 107, image:"null", category: 1, videoLink: "https://www.youtube.com/embed/Cl9aYUNeZ1E" },
]



export const awardItems: GalleryItem[] = [
  { id: 1, image: "/images/awards/award-1.jpg", category: 3 },
  { id: 2, image: "/images/awards/award-2.jpg", category: 3 },
  { id: 3, image: "/images/awards/award-3.jpg", category: 3 },
  { id: 4, image: "/images/awards/award-4.jpg", category: 3 },
  { id: 5, image: "/images/awards/award-5.jpg", category: 3 },
  { id: 6, image: "/images/awards/award-6.jpg", category: 3 },
  { id: 7, image: "/images/awards/award-7.jpg", category: 3 },
  { id: 8, image: "/images/awards/award-8.jpg", category: 3 },
  { id: 9, image: "/images/awards/award-9.jpg", category: 3 },
  { id: 10, image: "/images/awards/award-10.jpg", category: 3 },
];
export const eMitraItems: GalleryItem[] = [
  { id: 1, image: "/images/samman/award-1.JPG", category: 6 },
  { id: 2, image: "/images/samman/award-mitra-2.JPG", category: 6 },
  { id: 3, image: "/images/samman/award-mitra-3.JPG", category: 6 },
  { id: 4, image: "/images/samman/award-mitra-4.JPG", category: 6 },
  { id: 5, image: "/images/samman/award-mitra-5.JPG", category: 6 },
  { id: 6, image: "/images/samman/award-mitra-6.JPG", category: 6 },
  { id: 7, image: "/images/samman/award-mitra-7.JPG", category: 6 },
  { id: 8, image: "/images/samman/award-mitra-8.JPG", category: 6 },
  { id: 9, image: "/images/samman/award-mitra-9.JPG", category: 6 },
  { id: 10, image: "/images/samman/award-mitra-10.JPG", category: 6 },
  { id: 11, image: "/images/samman/award-mitra-11.JPG", category: 6 },
  { id: 12, image: "/images/samman/award-mitra-12.JPG", category: 6 },
  { id: 13, image: "/images/samman/award-mitra-13.JPG", category: 6 },
  { id: 14, image: "/images/samman/award-mitra-14.JPG", category: 6 },
  { id: 15, image: "/images/samman/award-mitra-15.JPG", category: 6 },
  { id: 16, image: "/images/samman/award-mitra-16.JPG", category: 6 },
  { id: 17, image: "/images/samman/award-mitra-17.JPG", category: 6 },
  { id: 18, image: "/images/samman/award-mitra-18.JPG", category: 6 },
  { id: 19, image: "/images/samman/award-mitra-19.JPG", category: 6 },
  { id: 20, image: "/images/samman/award-mitra-20.JPG", category: 6 },
  { id: 21, image: "/images/samman/award-mitra-21.JPG", category: 6 },
  { id: 22, image: "/images/samman/award-mitra-22.JPG", category: 6 },
  { id: 23, image: "/images/samman/award-mitra-23.JPG", category: 6 },
  { id: 24, image: "/images/samman/award-mitra-24.JPG", category: 6 },
  { id: 25, image: "/images/samman/award-mitra-25.JPG", category: 6 },
  { id: 26, image: "/images/samman/award-mitra-26.JPG", category: 6 },
  { id: 27, image: "/images/samman/award-mitra-27.JPG", category: 6 },
  { id: 28, image: "/images/samman/award-mitra-28.JPG", category: 6 },
  { id: 29, image: "/images/samman/award-mitra-29.JPG", category: 6 },
  { id: 30, image: "/images/samman/award-mitra-30.JPG", category: 6 },
  { id: 31, image: "/images/samman/award-mitra-31.JPG", category: 6 },
  { id: 32, image: "/images/samman/award-mitra-32.JPG", category: 6 },
  { id: 33, image: "/images/samman/award-mitra-33.JPG", category: 6 },
  { id: 34, image: "/images/samman/award-mitra-34.JPG", category: 6 },
  { id: 35, image: "/images/samman/award-mitra-35.JPG", category: 6 },
  { id: 36, image: "/images/samman/award-mitra-36.JPG", category: 6 },
  { id: 37, image: "/images/samman/award-mitra-37.JPG", category: 6 },
  { id: 38, image: "/images/samman/award-mitra-38.JPG", category: 6 },
  { id: 39, image: "/images/samman/award-mitra-39.JPG", category: 6 },
  { id: 40, image: "/images/samman/award-mitra-40.JPG", category: 6 },
  { id: 41, image: "/images/samman/award-mitra-41.JPG", category: 6 },
  { id: 42, image: "/images/samman/award-mitra-42.JPG", category: 6 },
  { id: 43, image: "/images/samman/award-mitra-43.JPG", category: 6 },
  { id: 44, image: "/images/samman/award-mitra-44.JPG", category: 6 },
  { id: 45, image: "/images/samman/award-mitra-45.JPG", category: 6 },
  { id: 46, image: "/images/samman/award-mitra-46.JPG", category: 6 },
  { id: 47, image: "/images/samman/award-mitra-47.JPG", category: 6 },
  { id: 48, image: "/images/samman/award-mitra-48.JPG", category: 6 },
  { id: 49, image: "/images/samman/award-mitra-49.JPG", category: 6 },
  { id: 50, image: "/images/samman/award-mitra-50.JPG", category: 6 },
  { id: 51, image: "/images/samman/award-mitra-51.JPG", category: 6 },
];


export const meetingItems: GalleryItem[] = [
  { id: 1, image: "/images/meeting/meeting-1.jpg", category: 4 },
  { id: 2, image: "/images/meeting/meeting-2.jpg", category: 4 },
  { id: 3, image: "/images/meeting/meeting-3.jpg", category: 4 },
  { id: 4, image: "/images/meeting/meeting-4.jpg", category: 4 },
  { id: 5, image: "/images/meeting/meeting-5.jpg", category: 4 },
  { id: 6, image: "/images/meeting/meeting-6.jpg", category: 4 },
  { id: 7, image: "/images/meeting/meeting-7.jpeg", category: 4 },
  { id: 8, image: "/images/meeting/meeting-8.jpeg", category: 4 },
  { id: 9, image: "/images/meeting/meeting-9.jpeg", category: 4 },
  { id: 10, image: "/images/meeting/meeting-10.jpeg", category: 4 },
];

export const wishesItems: GalleryItem[] = [
  { id: 1, image: "/images/wishes/wishes-1.jpg", category: 5 },
  { id: 2, image: "/images/wishes/wishes-2.jpg", category: 5 },
  { id: 3, image: "/images/wishes/wishes-3.jpg", category: 5 },
  { id: 4, image: "/images/wishes/wishes-4.jpg", category: 5 },
  { id: 5, image: "/images/wishes/wishes-6.jpg", category: 5 },
  { id: 6, image: "/images/wishes/wishes-7.jpg", category: 5 },
  { id: 7, image: "/images/wishes/wishes-8.jpg", category: 5 },
  { id: 8, image: "/images/wishes/wishes-9.jpg", category: 5 },
  { id: 9, image: "/images/wishes/wishes-10.jpg", category: 5 },
  { id: 10, image: "/images/wishes/wishes-11.jpg", category: 5 },
  { id: 11, image: "/images/wishes/wishes-12.jpg", category: 5 },
];


export const eventItems: GalleryItem[] = [
  { id: 1, image: "/images/events/event-1.jpg", category: 7 },
  { id: 2, image: "/images/events/event-2.jpg", category: 7 },
  { id: 3, image: "/images/events/event-3.jpg", category: 7 },
  { id: 4, image: "/images/events/event-4.jpg", category: 7 },
  { id: 5, image: "/images/events/event-5.jpg", category: 7 },
  { id: 6, image: "/images/events/event-6.jpg", category: 7 },
  { id: 7, image: "/images/events/event-7.jpg", category: 7 },
  { id: 8, image: "/images/events/event-8.jpg", category: 7 },
  { id: 9, image: "/images/events/event-9.jpg", category: 7 },
  { id: 10, image: "/images/events/event-10.jpg", category: 7 },
  { id: 11, image: "/images/events/event-11.jpg", category: 7 },
  { id: 12, image: "/images/events/event-12.jpg", category: 7 },
  { id: 13, image: "/images/events/event-13.jpg", category: 7 },
  { id: 14, image: "/images/events/event-14.jpg", category: 7 },
];
export const NewsPaper: GalleryItem[] = [
  { id: 1, image: "/images/news/news-1.jpg", category: 8 },
  { id: 2, image: "/images/news/news-2.jpg", category: 8 },
  { id: 3, image: "/images/news/news-3.jpg", category: 8 },
  { id: 4, image: "/images/news/news-4.jpg", category: 8 },
  { id: 5, image: "/images/news/news-5.jpg", category: 8 },
  { id: 6, image: "/images/news/news-6.jpg", category: 8 },
  { id: 7, image: "/images/news/news-7.jpg", category: 8 },
  { id: 8, image: "/images/news/news-8.jpg", category: 8 },
  { id: 9, image: "/images/news/news-9.jpg", category: 8 },
  { id: 10, image: "/images/news/news-10.jpg", category: 8 },
  { id: 11, image: "/images/news/news-11.jpg", category: 8 },
  { id: 12, image: "/images/news/news-12.jpg", category: 8 },
  { id: 13, image: "/images/news/news-13.jpg", category: 8 },
  { id: 14, image: "/images/news/news-14.jpg", category: 8 },
  { id: 15, image: "/images/news/news-15.jpg", category: 8 },
];

export const projectManagersContact = [
  {
    id: 1,
    mobile: "8901903333",
    name: "Helpline Number",
    project: "ALL",
    designation: "",
    location: "",
  },
  {
    id: 2,
    mobile: "9587887701",
    name: "M L Jhalani",
    project: "ALL",
    designation: "General Manager",
    location: "Jaipur",
  },
  {
    id: 3,
    mobile: "9587887702",
    name: "Rajkumar",
    project: "ALL",
    designation: "Manager",
    location: "Jaipur",
  },
  {
    id: 4,
    mobile: "9587887705",
    name: "Sachin Choudhary",
    project: "ALL",
    designation: "Operational Manager",
    location: "Jaipur",
  },
  {
    id: 5,
    mobile: "9587887834",
    name: "Mayank Gill",
    project: "ALL",
    designation: "Asst. Ops Manager",
    location: "Jaipur",
  },
  {
    id: 6,
    mobile: "7230003306",
    name: "Ateendra Kumar",
    project: "BOB",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 7,
    mobile: "9587887706",
    name: "Neetu Jaluthariya",
    project: "BOB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 8,
    mobile: "9587887773",
    name: "Muskan Sain",
    project: "BOB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 9,
    mobile: "9587895958",
    name: "Madhusudan",
    project: "BOB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 10,
    mobile: "9587887156",
    name: "Neha Jangid",
    project: "BOB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 11,
    mobile: "9257028323",
    name: "Sumer",
    project: "BOI CBI",
    designation: "LEAD GENERATION",
    location: "Jaipur",
  },
  {
    id: 12,
    mobile: "9587887781",
    name: "Vaibhavi Rathod",
    project: "BOI CBI",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 13,
    mobile: "9587887755",
    name: "Ram Lal Yadav",
    project: "BRKGB",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 14,
    mobile: "9587887771",
    name: "Priyanka Kirodiya",
    project: "BRKGB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 15,
    mobile: "9587887860",
    name: "Sanjay Paswan",
    project: "BRKGB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 16,
    mobile: "9587887153",
    name: "Ankita Gupta",
    project: "BRKGB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 17,
    mobile: "9587887724",
    name: "Rahul",
    project: "DC",
    designation: "District Coordinator",
    location: "Jaipur",
  },
  {
    id: 18,
    mobile: "9587887658",
    name: "Rohit Yadav(Degs)",
    project: "E-Mitra",
    designation: "Project Coordinator",
    location: "Jaipur",
  },
  {
    id: 19,
    mobile: "9587887704",
    name: "Parmila",
    project: "E-Mitra",
    designation: "State Coordinator",
    location: "Jaipur",
  },
  {
    id: 20,
    mobile: "9587887876",
    name: "Dev Fouzdar",
    project: "E-Mitra",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 21,
    mobile: "9587667777",
    name: "Komal",
    project: "RAJPAY",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 22,
    mobile: "9587887748",
    name: "Shreyansha",
    project: "RAJPAY",
    designation: "State Coordinator",
    location: "Jaipur",
  },
  {
    id: 23,
    mobile: "7230003324",
    name: "Sanjay Kumar",
    project: "RKCL",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 24,
    mobile: "9587887775",
    name: "Karan Parihar",
    project: "RKCL",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 25,
    mobile: "9587887651",
    name: "Meenakshi Ray",
    project: "RMGB",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 26,
    mobile: "9587887652",
    name: "Madhumita",
    project: "RMGB",
    designation: "Project Coordinator",
    location: "Jaipur",
  },
  {
    id: 27,
    mobile: "9587887703",
    name: "Hanuman Jogi",
    project: "STATIONERY",
    designation: "Store Incharge",
    location: "Jaipur",
  },
  {
    id: 28,
    mobile: "7230003311",
    name: "Himanshu",
    project: "E-Mitra",
    designation: "Tech support",
    location: "Hisar",
  },
  {
    id: 29,
    mobile: "9587887707",
    name: "Vikas",
    project: "E-Mitra",
    designation: "Tech support",
    location: "Hisar",
  },
  {
    id: 30,
    mobile: "9587887747",
    name: "Sapna",
    project: "E-Mitra",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 31,
    mobile: "7027100404",
    name: "Aryan",
    project: "E-Mitra",
    designation: "Files Uploading",
    location: "Hisar",
  },
  {
    id: 32,
    mobile: "8930300601",
    name: "Charu Mukhija",
    project: "Shop Neo",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 33,
    mobile: "8930300602",
    name: "Bharti",
    project: "Shop Neo",
    designation: "Project Manager",
    location: "Hisar",
  },
  {
    id: 34,
    mobile: "8930300603",
    name: "Harsh",
    project: "Shop Neo",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 35,
    mobile: "8930300605",
    name: "Poonam",
    project: "E-Mitra",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 36,
    mobile: "8930300612",
    name: "Arzoo",
    project: "Bank BC",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 37,
    mobile: "8930300615",
    name: "Ritika",
    project: "YOGA",
    designation: "Project Manager",
    location: "Hisar",
  },
  {
    id: 38,
    mobile: "9034040242",
    name: "Charu",
    project: "E-Mitra",
    designation: "Tech Support",
    location: "Hisar",
  },
  {
    id: 39,
    mobile: "9034040244",
    name: "Prerna",
    project: "E-Mitra",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 40,
    mobile: "9034040246",
    name: "Bindiya",
    project: "E-Mitra",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 41,
    mobile: "9034040247",
    name: "Virender Bhyan",
    project: "Accounts",
    designation: "Accounts Officer",
    location: "Hisar",
  },
  {
    id: 42,
    mobile: "9034040382",
    name: "Ekta",
    project: "Bank BC",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 43,
    mobile: "9034040243",
    name: "Ritika",
    project: "E-Mitra",
    designation: "Project Manager",
    location: "Hisar",
  },
  {
    id: 44,
    mobile: "9034559944",
    name: "Reena",
    project: "Shop Neo",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 45,
    mobile: "7230003337",
    name: "Muskan Sain",
    project: "Bank BC",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 46,
    mobile: "8930300623",
    name: "Sumit",
    project: "Software",
    designation: "Developer",
    location: "Hisar",
  },
];


export const districtCoordinators = [
  {
    id: 1,
    district: "Ajmer",
    name: "Mr. Vishal Dev Gaur",
    phNo: "9587887708",
    emailId: "Ajmer@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Police Line, Naya Bara, Opp. Basant Vihar Colony, Ajmer- 305001 (Raj.)"
  },
  {
    id: 2,
    district: "Alwar",
    name: "Mr. Manoj Saini",
    phNo: "9587887709",
    emailId: "Alwar@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Ward No  28 ,Near Jai Ambe Marriage Garden, Jyoti Rav Fule Circle , Bus Stand Road, Alwar- 301001 (Raj.)"
  },
  {
    id: 3,
    district: "Banswara",
    name: "Mr. Vikesh Jain",
    phNo: "9587887710",
    emailId: "Banswara@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. ,Near Bharat Gas Office, College Road ,Banswara -327001  (Raj.)"
  },
  {
    id: 4,
    district: "Baran",
    name: "Mr. Rajesh Suman",
    phNo: "9587887711",
    emailId: "Baran@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Shop No.- 7, Namdev Bhawan, Charighat Road Near Amber Circle ,Baran - 325205 (Raj.)"
  },
  {
    id: 5,
    district: "Barmer",
    name: "Mr. Moulabaksh Khan",
    phNo: "9587887712",
    emailId: "Barmer@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Opp. PG Collage , Malinath ShiKshan Sansthan, Shop N. -1 Sindhary Choraya ,Barmer - 344001 (Raj.)"
  },
  {
    id: 6,
    district: "Bharatpur",
    name: "Mr. Vikram Singh",
    phNo: "9587887713",
    emailId: "Bharatpur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. ,C-Block Ward No.-15, Near Kalsi Hospital , Indra Nagar, Bharatpur -321001 (Raj)"
  },
  {
    id: 7,
    district: "Bhilwara",
    name: "Mr. Jagdish Ladha",
    phNo: "9587887714",
    emailId: "Bhilwara@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., 3-M-7, Bapunagar ,Bhilwara -311001 (Raj.)"
  },
  {
    id: 8,
    district: "Bikaner",
    name: "Mr. Sajjan Singh",
    phNo: "9587887715",
    emailId: "Bikaner@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Government  Press Road ,Court Parishar ,Bikaner -334001 (Raj.)"
  },
  {
    id: 9,
    district: "Bundi",
    name: "Mr. Manish Kumar",
    phNo: "9587887716",
    emailId: "Bundi@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Nainwa Road, Matunda Choraha, Bundi - 323001 (Raj.)"
  },
  {
    id: 10,
    district: "Chittorgarh",
    name: "Mr. Nana Goswami",
    phNo: "9587887717",
    emailId: "Chittorgarh@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., C-29 Meera Market , Near HDFC Bank ,Chittoragarh -312001 (Raj. )"
  },
  {
   id: 11,  
    district: "Churu",
    name: "Mr. Sourabh",
    phNo: "9587887718",
    emailId: "Churu@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., 1st Floor, Priya Printing Press, Near Eye Hospital, Sainik Basti, Churu -331001 (Raj.)"
  },
  {
     id: 12,
    district: "Dausa",
    name: "Mr. Dinesh Gurjar",
    phNo: "9587887719",
    emailId: "Dausa@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Baswa Road , Near Rajesh Pilot College, Bandikui. Dausa - 303313 ( Raj.)"
  },
  {
     id: 13,
    district: "Dholpur",
    name: "Mr. Gourav",
    phNo: "9587887720",
    emailId: "Dholpur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Avanti Bai Colony ,Ward No.- 46, Below RajaKhera By Pass Road , Distt.- Dholpur  - 328001 (Raj.)"
  },
  {
     id: 14,
    district: "Dungarpur",
    name: "Mr. Vinod Parmar",
    phNo: "9587887721",
    emailId: "Dungarpur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Shop No.-7,New Sabji Mandi , Dungarpur - 314001 (Raj.)"
  },
  {
     id: 15,
    district: "Hanumangarh",
    name: "Mr. Vikas Kumar",
    phNo: "9587887723",
    emailId: "Hanumangarh@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Ward No. 50, Near Chuna Fatak, Behind Kamra Tent House, Hanumangarh Jn.- 335512 (Raj.)"
  },
  {
     id: 16,
    district: "Jaipur",
    name: "Mr. Rahul Kumar",
    phNo: "9587887724",
    emailId: "Jaipur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. , #107, Shiv Vihar AB, Near Maharani Bagh Palace, Lalarpura, Gandhi Path (West), Vaishali Nagar, Jaipur - 302021 (Raj.)"
  },
  {
     id: 17,
    district: "Jaisalmer",
    name: "Mr. Nepal Singh",
    phNo: "9587887725",
    emailId: "Jaisalmer@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Dr. Kanhaiya Lal Achalvanshi Colony, Dedansar Road, Jaisalmer-345001 (Raj.)"
  },
  {
     id: 18,
    district: "Jalore",
    name: "Mr. Sudarshan Singh",
    phNo: "9587887726",
    emailId: "Jalore@achariyagroupcom",
    address: "Achariya Technologies Pvt. Ltd. , Kalka Colony , Bhinmal Bypass Road , Jalore - 343001 (Raj.)"
  },
  {
     id: 19,
    district: "Jhalawar",
    name: "Mr. Durgesh Kumar",
    phNo: "9587887727",
    emailId: "Jhalawar@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., B-36, Shop No.-3 Near Khel Sankul Javahar Colony - Jhalawar - 326001 (Raj.)"
  },
  {
     id: 20,
    district: "Jhunjhunu",
    name: "Mr. Praveen Kumar",
    phNo: "9587887728",
    emailId: "Jhunjhunu@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,House No.-1/250 Near By Housing Board Office ,Churu Road ,Jhunjhunu - 333001 (Raj.)"
  },
  {
     id: 21,
    district: "Jodhpur",
    name: "Mr. Kamlesh",
    phNo: "9587887729",
    emailId: "Jodhpur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. , Ujawal Niwas, Paota B Road Opp. Labour Office , Poata, Jodhpur – 342001 (Raj.)"
  },
  {
     id: 22,
    district: "Karauli",
    name: "Mr. Rajesh Saini",
    phNo: "9587887730",
    emailId: "Karauli@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. , Radha Rani Market , In Front Of ParshuRam Vatika Hindaun City ,Karauli - 322230 ( Raj.)"
  },
  {
     id: 23,
    district: "Kota",
    name: "Mr. Jitendra Kumar Nagar",
    phNo: "9587887731",
    emailId: "Kota@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., HN-743 , A.R.K Puram ,Near Ahinsa Circle ,Kota - 324010 (Raj.)"
  },
  {
     id: 24,
    district: "Nagaur",
    name: "Mr. Ram Prakash",
    phNo: "9587887732  9587887792",
    emailId: "Nagaur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Shop-9 ,Hari Om Market , Didwana Road , Nagaur - 341001 (Raj.)"
  },
  {
     id: 25,
    district: "Pali",
    name: "Mr. Rakesh Kumar",
    phNo: "9587887733",
    emailId: "Pali@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. ,Vinayak Complax, Opp RMGB Bank, Pratap Bazar Rani, Pali - 306115 (Raj.)"
  },
  {
     id: 26,
    district: "Pratapgarh",
    name: "Mr. Hitesh Rathor",
    phNo: "9587887734",
    emailId: "Pratapgarh@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. ,Lohar Gali ,In Front Of Govt. School ,Pratapgarh - 313605 (Raj.)"
  },
  {
     id: 27,
    district: "Rajasamand",
    name: "Mr.Naresh Kumar",
    phNo: "9587887735",
    emailId: "Rajasamand@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Opposite Primary School ,Bus Stand ,Pasoond ,Rajasamand -313324 (Raj.)"
  },
  {
     id: 28,
    district: "Sawai Madhopur",
    name: "Mr. Ramsahay Saini",
    phNo: "9587887736",
    emailId: "Swaimadhopur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. , Shop No.- 4 ,1st Floor _Shiv Mandir Main Gate Building , Bazriya ,Sawai Madhopur - 322001 (Raj.)"
  },
  {
     id: 29,
    district: "Sikar",
    name: "Mr. Ashok Kumar Dhaka",
    phNo: "9587887737",
    emailId: "Sikar@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Shop No.-111,First Floor Ganga Gaurav Tower,Rani Sati Road,Near New Nagar Parishad,Sikar -332001 (Raj.)"
  },
  {
     id: 30,
    district: "Sirohi",
    name: "Mr. Ujjawal Tiwari",
    phNo: "9587887738",
    emailId: "Sirohi@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Rupava Bus Stand,Main Road, Kailashnagar, Sirohi - 307801 (Raj.)"
  },
  {
     id: 31,
    district: "Sri Ganganagar",
    name: "Mr. Man Singh",
    phNo: "9587887722",
    emailId: "sriganganagar@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., City Hospital C Block  near Meera Chowk ,Sri Ganganagar -335001 (Raj.)"
  },
  {
     id: 32,
    district: "Tonk",
    name: "Mr. Ram Avtar Saini",
    phNo: "9587887739",
    emailId: "Tonk@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Malipura House ,Near Rajiv Gandhi Law College , Modi Ki Chowki ,Tonk -304001 (Raj.)"
  },
  {
     id: 33,
    district: "Udaipur",
    name: "Mr. Hemant Acharya",
    phNo: "9587887740",
    emailId: "Udaipur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., 98- B, Dore Nagar ,Sector-3 ,Hiran Magri ,Sevaasharam Chouraha,Udaipur -313001 (Raj.)"
  }
];

//   our collaborations logos
export const ourCollaborations = [
  "/images/collbration-slide-1.jpg",
  "/images/collbration-slide-2.jpg",
  "/images/collbration-slide-3.jpg",
  "/images/collbration-slide-4.jpg",
  "/images/collbration-slide-5.jpg",
  "/images/collbration-slide-6.jpg",
  "/images/collbration-slide-7.jpg",
  "/images/collbration-slide-1.jpg",
  "/images/collbration-slide-2.jpg",
  "/images/collbration-slide-3.jpg",
  "/images/collbration-slide-4.jpg",
 
];
// projects
export const projects = [
  {
    id: 1,
    title: "Shopneo",
    desc: "A modern e-commerce platform designed to provide seamless shopping experiences for customers with intuitive design and robust functionality.",
    img: "/images/shopneo.png",
    link: "/projects/shopneo",
  },
  {
    id: 2,
    title: "e-Mitra",
    desc: "An advanced digital service portal enabling easy access to government services and information for citizens.",
    img: "/images/e-Mitra.jpg",
    link: "/projects/e-mitra",
  },
  {
    id: 3,
    title: "Kiosk Banking/BankBc",
    desc: "A futuristic banking solution with kiosk services for convenient access to financial services in remote areas.",
    img: "/images/kisok-bank.jpg",
    link: "/projects/kiosk-banking",
  },
  {
    id: 5,
    title: "RKCL",
    desc: "Smart learning and training solutions with interactive features for students and professionals.",
    img: "/images/RKCL.jpg",
    link: "/projects/rkcl",
  },
  {
    id: 6,
    title: "School Easy",
    desc: "School management system that streamlines administration, student tracking, and communication.",
    img: "/images/school-Easy.jpg",
    link: "/projects/school-easy",
  },
  {
    id: 7,
    title: "Paytm Registration",
    desc: "A platform enabling quick and secure registration and onboarding for digital payment services.",
    img: "/images/Paytm-Registration.jpg",
    link: "/projects/paytm-registration",
  },
];


export const faqs = [
  {
    question: "What services does Achariya Group Private Limited provide?",
    answer:
      "We provide a wide range of services including Shopneo e-commerce, e-Mitra services, kiosk banking/Bank BC, insurance solutions, RKCL training, School Easy software, Paytm registration, and technical support for biometric devices and banking kiosks.",
  },
  {
    question: "How can I register for Shopneo through Achariya Group?",
    answer:
      "You can register for Shopneo easily by visiting our official website at https://shopneo.org and completing the online process. Alternatively, you can also visit our office or contact our support team, and we will guide you step-by-step with the documentation and onboarding process. Once registered, you can not only sell your products as a seller but also buy products from other businesses. Shopneo is powered by the ONDC government portal, making digital commerce more accessible and trustworthy.",
  },
  {
    question: "What is e-Mitra and how can I get started?",
    answer:
      "e-Mitra is a government initiative that allows citizens to access various services digitally. Through Achariya Group, you can apply for a new e-Mitra kiosk, get identity cards, access forms, and complete the installation process with proper guidance.",
  },
  {
    question: "Do you provide support for Kiosk Banking and Bank BC?",
    answer:
      "Yes, we help with the setup and management of kiosk banking and Bank BC services, including installation, RD service setup, and biometric device drivers.",
  },
  {
    question: "Can you help with biometric device installation and drivers?",
    answer:
      "Yes, we provide drivers and setup assistance for devices like Cogent, Mantra (MFS100, MFS110, Iris), Morpho, and Startek, along with complete installation support.",
  },
  {
    question: "Do you offer training under RKCL?",
    answer:
      "Yes, we are associated with RKCL to provide certified training programs that help students and professionals enhance their digital skills.",
  },
  {
    question: "What is School Easy and how does it help schools?",
    answer:
      "School Easy is our school management solution that helps schools manage student data, fees, communication, and administration digitally, making operations more efficient.",
  },
  {
    question: "How do I apply for insurance services?",
    answer:
      "Achariya Group provides insurance support for individuals and businesses. You can reach out to our team to explore suitable insurance plans and get registered.",
  },
  {
    question: "How long does it take to activate services like e-Mitra or Shopneo?",
    answer:
      "Activation timelines vary depending on the service. Typically, Shopneo registration takes 2-3 working days, while e-Mitra setup may take longer depending on documentation and verification.",
  },
  {
    question: "Where can I get help if I face issues with installation or registration?",
    answer:
      "You can contact our dedicated support team. We provide complete technical assistance for driver installation, RD service setup, and registration issues.",
  },
];


// footer data

// footer array
export const socialLinks = [
  { href: "https://www.facebook.com/myAchariya", icon: FiFacebook },
  { href: "https://x.com/Achariyagroup", icon: FiTwitter },
  { href: "https://www.linkedin.com/in/Achariyagroup", icon: FiLinkedin },
  { href: "https://www.youtube.com/channel/UCS-2gyn-Fon-QUyO61HPtCA", icon: FiYoutube },
  { href: "https://www.instagram.com/Achariyagroup", icon: FiInstagram },
];


// export const pages = ["About Us", "Careers", "Contact Us", "Media", "FAQ", "Privacy Policy"];
export const pages = [{ title: "Home", url: "/" }, { url: "/about", title: "About Us" }, { url: "/directors-message", title: "Directors message" }, { url: "/contact", title: "Contact Us" }, { url: "/news-media", title: "News & Media" }, { url: "/gallery", title: "Gallery" }, { url: "/faq", title: "FAQ" }, { url: "/privacy-policy", title: "Privacy Policy" }, { title: "Complaint & Feedback", url: "complaint-feedback" },{ title: "Order e-mitra Stationery", url: "order-e-mittra-stationery" }];
export const projectsLink = [
  { title: "Shopneo", url: "/shopneo" },
  { title: "e-Mitra", url: "/emitra" },
  { title: "Kiosk Banking", url: "/kiosk-banking" },
  { title: "Insurance", url: "/insurance" },
  { title: "RKCL", url: "/rkcl" },
  { title: "School Easy", url: "/school-easy" },
  { title: "Payment Registration", url: "/payment-registration" },

];

// Footer support links
export const support = [
  { title: "Contact Us", type: "heading" },

  // Separate phone numbers
  { title: "+91 890-190-3333", url: "tel:+918901903333", type: "tel" },
  { title: "+91 903-404-0243", url: "tel:+919034040243", type: "tel" },
  { title: "+91 958-788-7702", url: "tel:+919587887702", type: "tel" },

  // Separate emails
  { title: "info@Achariyagroup.com", url: "mailto:info@Achariyagroup.com", type: "email" },
  { title: "manager@Achariyagroup.com", url: "mailto:manager@Achariyagroup.com", type: "email" },

  { title: "Privacy Policy", url: "/privacy-policy", type: "internal" },
  { title: "Terms & Conditions", url: "/terms-conditions", type: "internal" },
];



// e mitra forms data
export const emitradocuments = [
  {
    id: 1,
    sn: '1',
    name: 'मूल निवास प्रमाण – पत्र आवेदन पत्र (Bonafied Certificate)',
    category: 'miscellaneous',
    link: '/pdf/mul-niwas-rajasthan-form.pdf'
  },
  {
    id: 2,
    sn: '2.(a)',
    name: 'जाति प्रमाण-पत्र (General Cast Certificate (Emitra Rajasthan))',
    category: 'caste-certificate',
    link: '/pdf/generalCategory.pdf'
  },
  {
    id: 3,
    sn: '2.(b)',
    name: 'जाति प्रमाण-पत्र (OBC CASTE APPLICATION FORM RAJASTHAN STATE (Emitra Rajasthan))',
    category: 'caste-certificate',
    link: '/pdf/OBC-CASTE-APPLICATION-FORM-RAJASTHAN-STATE.pdf'
  },
  {
    id: 4,
    sn: '2.(c)',
    name: 'जाति प्रमाण-पत्र (OBC CENTRAL NEW FORMAT 2024(Scholarship)(Emitra Rajasthan))',
    category: 'caste-certificate',
    link: '/pdf/OBC-CENTRAL-NEW-FORMAT-2024.pdf'
  },
  {
    id: 5,
    sn: '2.(d)',
    name: 'जाति प्रमाण-पत्र (SC_ST CASTE APPLICATION FORM Rajasthan)',
    category: 'caste-certificate',
    link: '/pdf/SC_ST-CASTE-APPLICATION-FORM-2019.pdf'
  },
  {
    id: 6,
    sn: '2.(e)',
    name: 'जाति प्रमाण-पत्र (Caste Certificate for SC ST for Central (Emitra Rajasthan))',
    category: 'caste-certificate',
    link: '/pdf/Caste-Certificate-for-SC-ST-for-Central.pdf'
  },
  {
    id: 7,
    sn: '3',
    name: 'आर्थिक रूप से कमजोर वर्ग (EWS) प्रमाण पत्र के लिए आवेदन पत्र',
    category: 'miscellaneous',
    link: '/pdf/EWS-New-Form-3.pdf'
  },
  {
    id: 8,
    sn: '4',
    name: 'अल्पसंख्यक जाति प्रमाण-पत्र (Minority Caste Certificate)',
    category: 'caste-certificate',
    link: '/pdf/Alapsankhayak_Jati_Parman_Patr.pdf'
  },
  {
    id: 9,
    sn: '5.(a)',
    name: 'न्यू राशन कार्ड आवेदन फॉर्म (Ration Card)',
    category: 'ration-card',
    link: '/pdf/new-Ration-card-application-form.pdf'
  },
  {
    id: 10,
    sn: '5.(b)',
    name: 'राशन कार्ड में सुधार हेतु आवेदन फॉर्म (Ration Card)',
    category: 'ration-card',
    link: '/pdf/GAndE_1493702947052.pdf'
  },
  {
    id: 11,
    sn: '5.(c)',
    name: 'नाम जुडवाने हेतु शपथ-पत्र (Ration Card)',
    category: 'ration-card',
    link: '/pdf/Add-Name-sapath-patra.pdf'
  },
  {
    id: 12,
    sn: '5.(d)',
    name: 'नाम हटाने हेतु शपथ-पत्र (Ration Card)',
    category: 'ration-card',
    link: '/pdf/Remove-name-rasan-card-sapath-patra.pdf'
  },
  {
    id: 13,
    sn: '5.(e)',
    name: 'राशन कार्ड निरस्त करने हेतु शपथ-पत्र (Ration Card)',
    category: 'ration-card',
    link: '/pdf/Cancel-RAtion-card-sapath-patra.pdf'
  },
  {
    id: 14,
    sn: '6',
    name: 'खाद्य सुरक्षा योजना में नाम जुडवाने हेतु आवेदन फॉर्म (NFSA Form)',
    category: 'ration-card',
    link: ''
  },
  {
    id: 15,
    sn: '6.(a)',
    name: 'शहरी क्षेत्र हेतु आवेदन पत्र',
    category: 'ration-card',
    link: '/pdf/city_People.pdf'
  },
  {
    id: 16,
    sn: '6.(b)',
    name: 'ग्रामीण क्षेत्र हेतु आवेदन पत्र',
    category: 'ration-card',
    link: '/pdf/NFSA-Rural-Form-1.pdf'
  },
  {
    id: 17,
    sn: '7.(a)',
    name: 'सामाजिक सुरक्षा पेंशन योजना आवेदन फॉर्म',
    category: 'pension',
    link: '/pdf/Pension-Application-Form.pdf'
  },
  {
    id: 18,
    sn: '7.(b)',
    name: 'सामाजिक सुरक्षा पेंशन योजना (आय प्रमाण पत्र)',
    category: 'pension',
    link: '/pdf/Pension-Income-certificate1.pdf'
  },
  {
    id: 19,
    sn: '8',
    name: 'पालनहार योजना हेतु आवेदन फॉर्म',
    category: 'pension',
    link: '/pdf/palanhar-application-form.pdf'
  },
  {
    id: 20,
    sn: '9',
    name: 'जन्म प्रमाण-पत्र ( Birth Certificate)',
    category: 'birth-death-marriage',
    link: '/pdf/birthcertificate.pdf'
  },
  {
    id: 21,
    sn: '9.(a)',
    name: 'जन्म प्रमाण-पत्र 21 दिन ( Birth Certificate 21 Days)',
    category: 'birth-death-marriage',
    link: '/pdf/BirthCertificate21Days.pdf'
  },
  {
    id: 22,
    sn: '9.(b)',
    name: 'जन्म प्रमाण-पत्र 1 महिना ( Birth Certificate 1 Month)',
    category: 'birth-death-marriage',
    link: '/pdf/BirthCertificate1Month.pdf'
  },
  {
    id: 23,
    sn: '9.(c)',
    name: 'जन्म प्रमाण-पत्र 1 साल ( Birth Certificate 1 Year )',
    category: 'birth-death-marriage',
    link: '/pdf/BirthCertificate1Year.pdf'
  },
  {
    id: 24,
    sn: '10',
    name: 'मृत्यू प्रमाण-पत्र ( Death Certificate)',
    category: 'birth-death-marriage',
    link: '/pdf/deathcertificate.pdf'
  },
  {
    id: 25,
    sn: '11',
    name: 'विवाह प्रमाण-पत्र (Marriage Certificate)',
    category: 'birth-death-marriage',
    link: '/pdf/vivahpanjiyan.pdf'
  },
  {
    id: 26,
    sn: '12',
    name: 'श्रम विभाग : निर्माण श्रमिक सुलभ्य आवास योजना (Emitra Rajasthan)',
    category: 'miscellaneous',
    link: '/pdf/aavas-yojna-application-form.pdf'
  },
  {
    id: 27,
    sn: '13',
    name: 'आय प्रमाण-पत्र',
    category: 'income-certificate',
    link: '/pdf/INCOME-CERTIFICATE-4-PAGE-2_compressed.pdf'
  },
  {
    id: 28,
    sn: '13.(a)',
    name: 'आय प्रमाण-पत्र नया',
    category: 'income-certificate',
    link: '/pdf/आय-प्रमाण-धोषणा.pdf'
  },
  {
    id: 29,
    sn: '13.(b)',
    name: 'आय प्रमाण-पत्र हेतु आवेदन फॉर्म नया (राजस्थान सरकार की विभिन्न छात्रवृति हेतु)',
    category: 'income-certificate',
    link: '/pdf/Scholarship-new-Income-Certificate-Form.pdf'
  },
  {
    id: 30,
    sn: '13.(c)',
    name: 'आय प्रमाण-पत्र हेतु आवेदन फॉर्म (राजस्थान सरकार की विभिन्न छात्रवृति हेतु)',
    category: 'income-certificate',
    link: '/pdf/Income-Certificate-for-Scholarship.pdf'
  },
  {
    id: 31,
    sn: '14',
    name: 'बेरोगाजगारी भत्ते हेतु शपथ-पत्र',
    category: 'miscellaneous',
    link: '/pdf/berojgari-bhatta-sapath-patra.pdf'
  },
  {
    id: 32,
    sn: '15.(a)',
    name: 'निजी चरित्र सत्यापन का फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/police-carecter-verification-certificate.pdf'
  },
  {
    id: 33,
    sn: '15.(b)',
    name: 'घरेलु नोकर का पुलिस चरित्र सत्यापन का फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/Police-Certificate-for-Servant-Varification.pdf'
  },
  {
    id: 33,
    sn: '15.(c)',
    name: 'किरायेदार के पुलिस चरित्र सत्यापन का फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/Police-Certificate-for-tenent-verification.pdf'
  },
  {
    id: 34,
    sn: '16',
    name: 'नामांतरण के लिए प्रार्थना पत्र (Application for Mutation)',
    category: 'miscellaneous',
    link: '/pdf/Application-form-Mutation.pdf'
  },
  {
    id: 35,
    sn: '17',
    name: 'गोदनामा हेतु आवेदन फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/godnama-application-form.pdf'
  },
  {
    id: 36,
    sn: '18',
    name: 'जन आधार आय प्रमाण पत्र ( JAN AADHAR INCOME FORM )',
    category: 'income-certificate',
    link: '/pdf/JanAadhar-Income-Forms.pdf'
  },
  {
    id: 37,
    sn: '19',
    name: 'तारबंदी योजना हेतु आवेदन फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/taar-bandhi-application-form.pdf'
  },
  {
    id: 38,
    sn: '20',
    name: 'कृषि यंत्रों के लिए सब्सिडी हेतु आवेदन फॉर्म ( Application for subsidy on farm implements )',
    category: 'miscellaneous',
    link: '/pdf/KRASHI-yantro-anudan-application-form.pdf'
  },
  {
    id: 39,
    sn: '21',
    name: 'फव्वारा पाईप लाईन के लिए सब्सिडी हेतु आवेदन फॉर्म ( Application for subsidy on farm implements )',
    category: 'miscellaneous',
    link: '/pdf/FwaraPipelineSubsidyFom.pdf'
  },
  {
    id: 40,
    sn: '22',
    name: 'हैसियत प्रमाण पत्र के लिए आवेदन फॉर्म ( Application for subsidy on farm implements )',
    category: 'income-certificate',
    link: '/pdf/हैसियत_प्रमाण_पत्र_के_लिए_आवेदन_पत्र.pdf'
  },
  {
    id: 41,
    sn: '23',
    name: 'यदि आपका ब्राउज़र नोट सिक्योर दिखा रहा है तो इसे डाउनलोड करके इनस्टॉल करें',
    category: 'miscellaneous',
    link: '/pdf/Global_Signin.zip'
  },
  {
    id: 42,
    sn: '24',
    name: 'Application form for NFSA Rural area',
    category: 'ration-card',
    link: '/pdf/Application%20form%20for%20NFSA%20Rural%20area.pdf'
  },
  {
    id: 43,
    sn: '25',
    name: 'Application form for NFSA Urban area',
    category: 'ration-card',
    link: '/pdf/Application%20form%20for%20NFSA%20Urban%20area.pdf'
  },
  {
    id: 44,
    sn: '26',
    name: 'Solvency Form',
    category: 'income-certificate',
    link: '/pdf/Solvency_Form.pdf'
  },
  {
    id: 45,
    sn: '27',
    name: 'Seed licnese Form',
    category: 'miscellaneous',
    link: '/pdf/Seed-licnese-Form.pdf'
  },
  {
    id: 46,
    sn: '28',
    name: 'PM Awas Yojana Urban Housing for All by 2022',
    category: 'miscellaneous',
    link: '/pdf/PM-Awas-Yojana-Urban-Housing-for-All-by-2022.pdf'
  },
  {
    id: 47,
    sn: '29',
    name: 'Physical Verification Document',
    category: 'miscellaneous',
    link: '/pdf/Physical_Verification_Document.pdf'
  },
  {
    id: 48,
    sn: '30',
    name: 'Lease Deed patta form',
    category: 'miscellaneous',
    link: '/pdf/Lease-Deed-patta-form.pdf'
  },
  {
    id: 49,
    sn: '31',
    name: 'IGSCCY Shapath Patra Format',
    category: 'miscellaneous',
    link: '/pdf/IGSCCY-Shapath-Patra-Format.pdf'
  },
  {
    id: 50,
    sn: '32',
    name: 'EWS For State form',
    category: 'miscellaneous',
    link: '/pdf/EWS-For-State-form.pdf'
  },
  {
    id: 51,
    sn: '33',
    name: 'Digi Subsidy form',
    category: 'miscellaneous',
    link: '/pdf/Digi-subsidy-form.pdf'
  },
  {
    id: 52,
    sn: '34',
    name: 'BONAFIED TSP',
    category: 'miscellaneous',
    link: '/pdf/BONAFIED-TSP.pdf'
  },
  {
    id: 53,
    sn: '35',
    name: 'Application form Low Cost Onion Cold Storage',
    category: 'miscellaneous',
    link: '/pdf/Application-form-Low-cost-onion-cold-storage.docx'
  },
  {
    id: 54,
    sn: '36',
    name: 'Bonafide Form',
    category: 'miscellaneous',
    link: '/pdf/bonafide-form.pdf'
  },
  {
    id: 55,
    sn: '37',
    name: 'Bhumi heen praman pratra',
    category: 'miscellaneous',
    link: '/pdf/Bhumi-heen-praman-pratra.pdf'
  },
  {
    id: 56,
    sn: '38',
    name: 'Laghu krashak praman patra',
    category: 'miscellaneous',
    link: '/pdf/Laghu-krashak-praman-patra.jpeg'
  },
  {
    id: 57,
    sn: '39',
    name: 'डिग्गी अधिकारी रिपोर्ट फॉर्म Diggi Reports Forms',
    category: 'miscellaneous',
    link: '/pdf/Diggi-Reports-Forms.pdf'
  },
  {
    id: 58,
    sn: '40',
    name: 'कृषि यंत्रो के लिए सब्सिडी हेतु आवदेन फॉर्म (farm implements )',
    category: 'miscellaneous',
    link: '/pdf/farm-implements.pdf'
  },
  {
    id: 59,
    sn: '41',
    name: 'कुसुम योजना सौर ऊर्जा फॉर्म Kusum Scheme Solar panel Application Form',
    category: 'miscellaneous',
    link: '/pdf/Kusum-Scheme-Solar-panel-Application-Form.pdf'
  },
  {
    id: 60,
    sn: '42',
    name: 'जल हौज़ पर अनदुान हेतु Application for subsidy on Water Storage Tank',
    category: 'miscellaneous',
    link: '/pdf/Application-for-subsidy-on-Water-Storage-Tank.pdf'
  },
  {
    id: 61,
    sn: '43',
    name: 'तारबन्दी योजना हेतु आवेदन फॉर्म Wire Fencing',
    category: 'miscellaneous',
    link: '/pdf/Wire-Fencing.pdf'
  },
  {
    id: 62,
    sn: '44',
    name: 'नामांतरण के लिए प्रार्थना पत्र (Application for Mutation)',
    category: 'miscellaneous',
    link: '/pdf/Application-for-Mutation.pdf'
  },
  {
    id: 63,
    sn: '45',
    name: 'शौचालय हेतु फॉर्म Shouchalay Form',
    category: 'miscellaneous',
    link: '/pdf/Shouchalay-Form.pdf'
  },
  {
    id: 64,
    sn: '46',
    name: 'मुख्यमंत्री कन्या शादी सहयोग योजना Application For Sahyog Scheme',
    category: 'miscellaneous',
    link: '/pdf/Application-For-Sahyog-Scheme.pdf'
  },
  {
    id: 65,
    sn: '47',
    name: 'विवाह प्रमाण-पत्र (Marriage Certificate)',
    category: 'birth-death-marriage',
    link: '/pdf/Marriage-Certificate.pdf'
  },
  {
    id: 66,
    sn: '48',
    name: 'ठेकेदार का प्रमाण पत्र Labour Contractor Certificate',
    category: 'miscellaneous',
    link: '/pdf/Labour-Contractor-Certificate.pdf'
  },
  {
    id: 67,
    sn: '49',
    name: 'नियोजक का प्रमाण पत्र Labour Niyojak Certificate',
    category: 'miscellaneous',
    link: '/pdf/Labour-Niyojak-Certificate.pdf'
  },
  {
    id: 68,
    sn: '50',
    name: 'राज श्री आवेदन फॉर्म Application For Rajshree',
    category: 'miscellaneous',
    link: '/pdf/Application-For-Rajshree.pdf'
  },
  {
    id: 69,
    sn: '51',
    name: 'दिव्यांग आवेदन फॉर्म Application For Disabililty',
    category: 'miscellaneous',
    link: '/pdf/Application-For-Disabililty.pdf'
  },
  {
    id: 70,
    sn: '52',
    name: 'प्रधानमंत्री आवास योजना ग्रामीण PM Aawas Rural',
    category: 'miscellaneous',
    link: '/pdf/PM-Aawas-Rural.pdf'
  },
  {
    id: 71,
    sn: '53',
    name: 'पशु छपरा टिन शेड Animal Chhapra Teen Shed',
    category: 'miscellaneous',
    link: '/pdf/Animal-Chhapra-Teen-Shed.pdf'
  },
  {
    id: 72,
    sn: '54',
    name: 'परित्यक्ता पेंशन फॉर्म Abandonment Pension Form',
    category: 'pension',
    link: '/pdf/Abandonment-Pension-Form.pdf'
  },
  {
    id: 73,
    sn: '55',
    name: 'दिव्यांग चिकित्सा प्रमाण पत्र Disability Medical Certificate',
    category: 'miscellaneous',
    link: '/pdf/Disability-Medical-Certificate.pdf'
  },
  {
    id: 74,
    sn: '56',
    name: 'आंगनवाड़ी फॉर्म Anganwadi Form',
    category: 'miscellaneous',
    link: '/pdf/Anganwadi-Form.pdf'
  },
  {
    id: 75,
    sn: '57',
    name: 'बेरोजगारी इंटर्नशिप प्रमाण पत्र Unemployment Internship Certificate',
    category: 'miscellaneous',
    link: '/pdf/Unemployment-Internship-Certificate.pdf'
  },
  {
    id: 76,
    sn: '58',
    name: 'मुख्यमंत्री कोरोना मृत्यु सहायता योजना फॉर्म Covid Death Claim Form',
    category: 'miscellaneous',
    link: '/pdf/Covid-Death-Claim-Form.pdf'
  }
];
