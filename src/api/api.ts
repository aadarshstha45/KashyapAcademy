export const HomeApi = {
  getByInstitution: "/home-contents/:institution",
  getStatistics: "/statistic",
  getServices: "/service",
  getFaculty: "/faculty",
  getFacility: "/facility",
  getTeam: "/team",
  getBlog: "/blog",
  getTestimonial: "/testimonial",
  getGallery: "/gallery",
  getEvent: "/home_events",
};

export const TeamApi = {
  getTeams: "/team",
};

export const SchoolApi = {
  getSchools: "/school",
};

export const MessageApi = {
  sendMessage: "/message",
};

export const BlogApi = {
  getBlogs: "/blog",
  getBlogById: "/blog/:id",
};

export const FacultyApi = {
  getFaculty: "/faculty/:id",
};

export const CourseMenuApi = {
  getCourseMenu: "/course_menu_items",
};

export const DownloadApi = {
  getDownloads: "/downloads/:institution",
};

export const EventApi = {
  getEvents: "/event",
};

export const NoticePopupApi = {
  getNoticePopups: "/notice_popup",
};

export const NoticeApi = {
  getNotices: "/notice",
};

export const FAQApi = {
  getFAQs: "/faq",
};
