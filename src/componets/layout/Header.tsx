"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore, ExpandLess } from "@mui/icons-material";
import Image from "next/image";
import TopBar from "../ui/TopBar";

export default function Header() {
  const pathname = usePathname();

  const [desktopAnchor, setDesktopAnchor] = useState<null | HTMLElement>(null);
  const [currentDropdown, setCurrentDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const dropdowns = [
    {
      title: "About Us",
      links: [
        { name: "About Us", href: "/about", type: "link" },
        { name: "Director's Message", href: "/directors-message", type: "link" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "Shopneo", href: "/projects/shopneo", type: "link" },
        { name: "e-Mitra", href: "/projects/emitra", type: "link" },
        { name: "Kiosk Banking/BankBc", href: "/projects/kiosk-banking", type: "link" },
        { name: "Insurance", href: "/projects/insurance", type: "link" },
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

  const isLinkActive = (linkHref: string) => pathname === linkHref;
  const isDropdownActive = (dropdownLinks: { href: string }[]) =>
    dropdownLinks.some((link) => isLinkActive(link.href));

  const handleDropdownOpen = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setDesktopAnchor(event.currentTarget);
    setCurrentDropdown(index);
  };
  const handleDropdownClose = () => {
    setDesktopAnchor(null);
    setCurrentDropdown(null);
  };

  return (
    <>
      <TopBar />

      {/* Desktop & Mobile Navbar */}
      <AppBar position="sticky" color="default" sx={{ bgcolor: "#fff", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 }, py: { xs: 1 } }}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Company Logo" width={100} height={40} />
          </Link>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 2 }}>
            {/* Home */}
            <Button
              component={Link}
              href="/"
              sx={{
                color: isLinkActive("/") ? "#7a0706" : "#261b7d",
                fontWeight: isLinkActive("/") ? 600 : 400,
                borderBottom: isLinkActive("/") ? "2px solid #7a0706" : "2px solid transparent",
                borderRadius: 0,
                minWidth: "auto",
                px: 1,
                pb: 0.5,
                "&:hover": { color: "#7a0706", backgroundColor: "transparent" },
              }}
            >
              Home
            </Button>

            {/* Dropdowns */}
            {dropdowns.map((dropdown, index) => (
              <Box key={index}>
                <Button
                  endIcon={<ExpandMore />}
                  onClick={(e) => handleDropdownOpen(e, index)}
                  sx={{
                    color: isDropdownActive(dropdown.links) ? "#7a0706" : "#261b7d",
                    fontWeight: isDropdownActive(dropdown.links) ? 600 : 600,
                    borderBottom: isDropdownActive(dropdown.links)
                      ? "2px solid #7a0706"
                      : "2px solid transparent",
                    borderRadius: 0,
                    minWidth: "auto",
                    px: 1,
                    pb: 0.5,
                    "&:hover": { color: "#7a0706", backgroundColor: "transparent" },
                  }}
                >
                  {dropdown.title}
                </Button>

                <Menu
                  anchorEl={desktopAnchor}
                  open={currentDropdown === index}
                  onClose={handleDropdownClose}
                  MenuListProps={{ "aria-labelledby": `menu-${index}` }}
                >
                  {dropdown.links.map((link, i) => (
                    <MenuItem
                      key={i}
                      component={link.type === "download" ? "a" : Link}
                      href={link.href}
                      {...(link.type === "download" ? { download: true } : {})}
                      onClick={handleDropdownClose}
                      sx={{
                        color: "#261b7d",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "rgba(220, 38, 38, 0.08)" },
                      }}
                    >
                      {link.name}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}

            {/* Other Links */}
            {["/news-media", "/rkcl-network", "/contact"].map((path, idx) => {
              const name =
                path === "/news-media"
                  ? "News & Media"
                  : path === "/rkcl-network"
                  ? "RKCL Network"
                  : "Contact Us";
              return (
                <Button
                  key={idx}
                  component={Link}
                  href={path}
                  sx={{
                    color: isLinkActive(path) ? "#7a0706" : "#261b7d",
                    fontWeight: isLinkActive(path) ? 600 : 600,
                    borderBottom: isLinkActive(path)
                      ? "2px solid #7a0706"
                      : "2px solid transparent",
                    borderRadius: 0,
                    minWidth: "auto",
                    
                    px: 1,
                    pb: 0.5,
                    "&:hover": { color: "#7a0706", backgroundColor: "transparent",fontWeight: 600, },
                  }}
                >
                  {name}
                </Button>
              );
            })}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: "flex" } }} onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: 280, boxSizing: "border-box" } }}
      >
        <Box sx={{ width: 280, height: "100%", p: 3, display: "flex", flexDirection: "column", overflowY: "auto" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Link href="/">
              <Image src="/images/logo.png" alt="Company Logo" width={100} height={40} />
            </Link>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {/* Home */}
            <ListItem disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href="/"
                onClick={() => setMobileOpen(false)}
                selected={isLinkActive("/")}
                sx={{
                  borderRadius: 1,
                  color: isLinkActive("/") ? "#7a0706" : "#261b7d",
                  fontWeight: isLinkActive("/") ? 600 : 400,
                  borderBottom: isLinkActive("/") ? "2px solid #7a0706" : "2px solid transparent",
                  "&.Mui-selected": { backgroundColor: "rgba(220, 38, 38, 0.08)" },
                }}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            {/* Mobile Dropdowns */}
            {dropdowns.map((dropdown, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    sx={{
                      borderRadius: 1,
                      justifyContent: "space-between",
                      color: isDropdownActive(dropdown.links) ? "#7a0706" : "#261b7d",
                      fontWeight: isDropdownActive(dropdown.links) ? 600 : 400,
                      borderBottom: isDropdownActive(dropdown.links)
                        ? "2px solid #7a0706"
                        : "2px solid transparent",
                      backgroundColor: isDropdownActive(dropdown.links) ? "rgba(220, 38, 38, 0.08)" : "transparent",
                    }}
                  >
                    <ListItemText primary={dropdown.title} />
                    {openAccordion === index ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>

                {openAccordion === index && (
                  <List component="div" disablePadding sx={{ pl: 2, flexDirection: "column", gap: 0.5, mt: 0.5 }}>
                    {dropdown.links.map((link, i) => (
                      <ListItem disablePadding key={i}>
                        <ListItemButton
                          component={link.type === "download" ? "a" : Link}
                          href={link.href}
                          {...(link.type === "download" ? { download: true } : {})}
                          onClick={() => setMobileOpen(false)}
                          sx={{
                            borderRadius: 1,
                            pl: 3,
                            color: "#261b7d",
                            fontWeight: 400,
                            borderBottom: "2px solid transparent",
                            "&:hover": { backgroundColor: "rgba(220, 38, 38, 0.08)" },
                          }}
                        >
                          <ListItemText primary={link.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            ))}

            {/* Other Links */}
            {["/news-media", "/rkcl-network", "/contact"].map((path, idx) => {
              const name =
                path === "/news-media"
                  ? "News & Media"
                  : path === "/rkcl-network"
                  ? "RKCL Network"
                  : "Contact Us";
              return (
                <ListItem disablePadding sx={{ mb: 1 }} key={idx}>
                  <ListItemButton
                    component={Link}
                    href={path}
                    onClick={() => setMobileOpen(false)}
                    selected={isLinkActive(path)}
                    sx={{
                      borderRadius: 1,
                      color: isLinkActive(path) ? "#7a0706" : "#261b7d",
                      fontWeight: isLinkActive(path) ? 600 : 400,
                      borderBottom: isLinkActive(path) ? "2px solid #7a0706" : "2px solid transparent",
                      "&.Mui-selected": { backgroundColor: "rgba(220, 38, 38, 0.08)" },
                    }}
                  >
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
