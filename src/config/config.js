import {
  Update,
  LiveTvOutlined,
  PlaylistPlayOutlined,
  Search,
  FormatListBulleted,
  FavoriteBorder,
  SettingsOutlined,
  LogoutOutlined,
  DesktopWindowsOutlined,
} from "@mui/icons-material";

export const sidebarMenuConfig = [
  {
    type: "section",
    items: [
      {
        id: "discover",
        title: "Discover",
        icon: <Search />,
      },
      {
        id: "playlist",
        title: "Playlist",
        icon: <PlaylistPlayOutlined />,
      },
      {
        id: "movie",
        title: "Movie",
        icon: <LiveTvOutlined />,
      },
      {
        id: "tvshows",
        title: "TV Shows",
        icon: <DesktopWindowsOutlined />,
      },
      {
        id: "mylist",
        title: "My List",
        icon: <FormatListBulleted />,
      },
    ],
  },

  {
    type: "section",
    items: [
      {
        id: "watchlater",
        title: "Watch Later",
        icon: <Update />,
      },
      {
        id: "recomended",
        title: "Recomended",
        icon: <FavoriteBorder />,
      },
    ],
  },
  {
    type: "section",
    items: [
      {
        id: "settings",
        title: "Settings",
        icon: <SettingsOutlined />,
      },
      {
        id: "logout",
        title: "Logout",
        icon: <LogoutOutlined />,
      },
    ],
  },
];
