import * as React from "react";
import { Box, Divider, Drawer, Tab, Tabs } from "@mui/material";
import profileImage from "../assets/profileImage.jpg";
import { sidebarMenuConfig } from "../config/config";
import { Clear } from "@mui/icons-material";

export const NavigationSideBar = (props) => {
  const { userName, mobileOpen, setMobileOpen } = props;

  const renderTabs = (sectionConfig) => {
    return sectionConfig.map((tab) => (
      <Tab
        icon={tab.icon}
        iconPosition="start"
        key={tab.id}
        label={tab.title}
        disableRipple
        sx={{ minHeight: "48px" }}
        selected
      />
    ));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="navigation">
      {mobileOpen ? (
        <Clear
          className="close-menu-button"
          onClick={() => {
            setMobileOpen(false);
          }}
        />
      ) : (
        <></>
      )}
      <section className="profile-container">
        <img
          src={profileImage}
          alt="Eric Hoffman"
          className="profile-picture"
        />
        <span className="username">{userName}</span>
      </section>

      <Divider className="navigation-divider" />

      <section className="navigation-list">
        <Tabs
          orientation="vertical"
          value={0}
          // onChange={handleChange}
        >
          {renderTabs(sidebarMenuConfig[0].items)}
          <Divider className="navigation-divider" />
          {renderTabs(sidebarMenuConfig[1].items)}
          <Divider className="navigation-divider" />
          {renderTabs(sidebarMenuConfig[2].items)}
        </Tabs>
      </section>
    </div>
  );

  return (
    <aside className="navigation">
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: mobileOpen ? "block" : "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { md: 0 },
              overflowX: "clip",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </aside>
  );
};
