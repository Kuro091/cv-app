export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const NEXT_PUBLIC_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
export const NEXT_PUBLIC_GTM_AUTH = process.env.NEXT_PUBLIC_GTM_AUTH;
export const NEXT_PUBLIC_GTM_PREVIEW = process.env.NEXT_PUBLIC_GTM_PREVIEW;

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
