export interface Viewports {
  mobileL: string;
  tablet: string;
  tabletL: string;
  desktop: string;
  desktopXl: string;
  desktopXxl: string;
}

const viewports: Viewports = {
  mobileL: '@media (min-width: 480px)',
  tablet: '@media (min-width: 640px)',
  tabletL: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1024px)',
  desktopXl: '@media (min-width: 1280px)',
  desktopXxl: '@media (min-width: 1600px)',
};

export default viewports;
