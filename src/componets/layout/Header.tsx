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
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import Image from "next/image";
import TopBar from "../ui/TopBar";

export default function Header() {
  const pathname = usePathname();

  // Desktop dropdown
  const [desktopAnchor, setDesktopAnchor] = useState<null | HTMLElement>(null);
  const [currentDropdown, setCurrentDropdown] = useState<number | null>(null);

  // Mobile drawer & accordion
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const dropdowns = [
    {
      title: "About Us",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Director's Message", href: "/directors-message" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "Shopneo", href: "/projects/shopneo" },
        { name: "e-Mitra", href: "/projects/emitra" },
        { name: "Kiosk Banking/BankBc", href: "/projects/kiosk-banking" },
        { name: "Insurance", href: "/projects/insurance" },
        { name: "RKCL", href: "/projects/rkcl" },
        { name: "School Easy", href: "/projects/school-easy" },
        { name: "Paytm Registration", href: "/projects/paytm-registration" },
      ],
    },
    {
      title: "Downloads",
      links: [
        { name: "Cogent Driver", href: "/downloads/cogent-driver" },
        { name: "Mantra Iris Driver", href: "/downloads/mantra-iris-driver" },
        { name: "Mantra MFS100 Driver", href: "/downloads/mantra-mfs100-driver" },
        { name: "Mantra MFS110 Driver", href: "/downloads/mantra-mfs110-driver" },
      ],
    },
  ];

  // Helpers to detect active link/dropdown
  const isLinkActive = (linkHref: string) => pathname === linkHref;
  const isDropdownActive = (dropdownLinks: { href: string }[]) =>
    dropdownLinks.some(link => isLinkActive(link.href));

  // Desktop dropdown handlers
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
   <TopBar/>
      <AppBar position="sticky" color="default" sx={{ bgcolor: '#fff', boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 },py:{xs:1} }}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={"/images/logo.png"} alt="Company Logo" width={100} height={40} />
          </Link>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
            {/* Home */}
            <Button
              component={Link}
              href="/"
              sx={{
                color: isLinkActive("/") ? '#dc2626' : '#261b7d',
                fontWeight: isLinkActive("/") ? '600' : '400',
                borderBottom: isLinkActive("/") ? '2px solid #dc2626' : '2px solid transparent',
                borderRadius: 0,
                minWidth: 'auto',
                px: 1,
                pb: 0.5,
                '&:hover': {
                  color: '#dc2626',
                  backgroundColor: 'transparent',
                },
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
                    color: isDropdownActive(dropdown.links) ? '#dc2626' : '#261b7d',
                    fontWeight: isDropdownActive(dropdown.links) ? '600' : '400',
                    borderBottom: isDropdownActive(dropdown.links) ? '2px solid #dc2626' : '2px solid transparent',
                    borderRadius: 0,
                    minWidth: 'auto',
                    px: 1,
                    pb: 0.5,
                    '&:hover': {
                      color: '#dc2626',
                      backgroundColor: 'transparent',
                    },
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
                      component={Link}
                      href={link.href}
                      onClick={handleDropdownClose}
                      sx={{
                        color: isLinkActive(link.href) ? '#dc2626' : '#261b7d',
                        fontWeight: isLinkActive(link.href) ? '600' : '400',
                        backgroundColor: isLinkActive(link.href) ? 'rgba(220, 38, 38, 0.08)' : 'transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(220, 38, 38, 0.08)',
                        },
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
              const name = path === "/news-media" ? "News & Media" : path === "/rkcl-network" ? "RKCL Network" : "Contact Us";
              return (
                <Button
                  key={idx}
                  component={Link}
                  href={path}
                  sx={{
                    color: isLinkActive(path) ? '#dc2626' : '#261b7d',
                    fontWeight: isLinkActive(path) ? '600' : '400',
                    borderBottom: isLinkActive(path) ? '2px solid #dc2626' : '2px solid transparent',
                    borderRadius: 0,
                    minWidth: 'auto',
                    px: 1,
                    pb: 0.5,
                    '&:hover': {
                      color: '#dc2626',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {name}
                </Button>
              );
            })}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: 'flex' } }} onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: 280, boxSizing: 'border-box' } }}
      >
        <Box sx={{ width: 280, height: '100%', p: 3, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Link href="/">
              <Image src={"/images/logo.png"} alt="Company Logo" width={100} height={40} />
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
                  color: isLinkActive("/") ? '#dc2626' : '#261b7d',
                  fontWeight: isLinkActive("/") ? 600 : 400,
                  borderBottom: isLinkActive("/") ? '2px solid #dc2626' : '2px solid transparent',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(220, 38, 38, 0.08)',
                  },
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
                      justifyContent: 'space-between',
                      color: isDropdownActive(dropdown.links) ? '#dc2626' : '#261b7d',
                      fontWeight: isDropdownActive(dropdown.links) ? 600 : 400,
                      borderBottom: isDropdownActive(dropdown.links) ? '2px solid #dc2626' : '2px solid transparent',
                      backgroundColor: isDropdownActive(dropdown.links) ? 'rgba(220, 38, 38, 0.08)' : 'transparent',
                    }}
                  >
                    <ListItemText primary={dropdown.title} />
                    {openAccordion === index ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>

                {openAccordion === index && (
                  <List component="div" disablePadding sx={{ pl: 2, flexDirection: 'column', gap: 0.5, mt: 0.5 }}>
                    {dropdown.links.map((link, i) => (
                      <ListItem disablePadding key={i}>
                        <ListItemButton
                          component={Link}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          selected={isLinkActive(link.href)}
                          sx={{
                            borderRadius: 1,
                            pl: 3,
                            color: isLinkActive(link.href) ? '#dc2626' : '#261b7d',
                            fontWeight: isLinkActive(link.href) ? 600 : 400,
                            borderBottom: isLinkActive(link.href) ? '2px solid #dc2626' : '2px solid transparent',
                            '&.Mui-selected': { backgroundColor: 'rgba(220, 38, 38, 0.08)' },
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
              const name = path === "/news-media" ? "News & Media" : path === "/rkcl-network" ? "RKCL Network" : "Contact Us";
              return (
                <ListItem disablePadding sx={{ mb: 1 }} key={idx}>
                  <ListItemButton
                    component={Link}
                    href={path}
                    onClick={() => setMobileOpen(false)}
                    selected={isLinkActive(path)}
                    sx={{
                      borderRadius: 1,
                      color: isLinkActive(path) ? '#dc2626' : '#261b7d',
                      fontWeight: isLinkActive(path) ? 600 : 400,
                      borderBottom: isLinkActive(path) ? '2px solid #dc2626' : '2px solid transparent',
                      '&.Mui-selected': { backgroundColor: 'rgba(220, 38, 38, 0.08)' },
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
