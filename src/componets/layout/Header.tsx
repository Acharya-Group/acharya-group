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
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  // Desktop dropdown
  const [desktopAnchor, setDesktopAnchor] = useState<null | HTMLElement>(null);
  const [currentDropdown, setCurrentDropdown] = useState<number | null>(null);

  // Mobile drawer & accordion
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const isActive = (path: string) =>
    pathname === path
      ? "text-primary font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-primary";

  const dropdowns = [
    {
      title: "About Us",
      links: [
        { name: "About Us", href: "/services/web" },
        { name: "Director's Message", href: "/services/app" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "Shopneo", href: "/products/1" },
        { name: "e-Mitra", href: "/products/2" },
        { name: "Kiosk Banking/BankBc", href: "/products/2" },
        { name: "Insurance", href: "/products/2" },
        { name: "RKCL", href: "/products/2" },
        { name: "School Easy", href: "/products/2" },
        { name: "Paytm Registration", href: "/products/2" },
      ],
    },
    {
      title: "Downloads",
      links: [
        { name: "Cogent Driver", href: "/solutions/1" },
        { name: "Mantra Iris Driver", href: "/solutions/2" },
        { name: "Mantra MFS100 Driver", href: "/solutions/2" },
        { name: "Mantra MFS110 Driver", href: "/solutions/2" },
      ],
    },
  ];

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
      {/* Desktop & Mobile AppBar */}
      <AppBar position="sticky" color="default" className="bg-white dark:bg-gray-900 shadow-sm">
        <Toolbar className="flex justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={120} height={40} className="object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Button component={Link} href="/" className={isActive("/")}>
              Home
            </Button>

            {dropdowns.map((dropdown, index) => (
              <div key={index}>
                <Button
                  className={isActive(dropdown.links[0].href)}
                  endIcon={<ExpandMore />}
                  onClick={(e) => handleDropdownOpen(e, index)}
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
                    <MenuItem key={i} component={Link} href={link.href} onClick={handleDropdownClose}>
                      {link.name}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}

            <Button component={Link} href="/news-media" className={isActive("/news-media")}>
              News & Media
            </Button>
            <Button component={Link} href="/rkcl-network" className={isActive("/rkcl-network")}>
              RKCL Network
            </Button>
            <Button component={Link} href="/contact" className={isActive("/contact")}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <IconButton className="md:hidden" onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <div className="w-64 h-full bg-white dark:bg-gray-900 p-6 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={120} height={40} className="object-contain" />
            </Link>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/" onClick={() => setMobileOpen(false)}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            {dropdowns.map((dropdown, index) => (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="justify-between"
                  >
                    <ListItemText primary={dropdown.title} />
                    {openAccordion === index ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>

                {openAccordion === index && (
                  <List component="div" disablePadding className="pl-4 flex flex-col space-y-1">
                    {dropdown.links.map((link, i) => (
                      <ListItem disablePadding key={i}>
                        <ListItemButton
                          component={Link}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="pl-4"
                        >
                          <ListItemText primary={link.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
            ))}

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/news-media" onClick={() => setMobileOpen(false)}>
                <ListItemText primary="News & Media" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/rkcl-network" onClick={() => setMobileOpen(false)}>
                <ListItemText primary="RKCL Network" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/contact" onClick={() => setMobileOpen(false)}>
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
