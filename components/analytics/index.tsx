import GoogleAnalytics from "./google-analytics";

export default function Analytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return <GoogleAnalytics />;
}