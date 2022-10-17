import { AppRouters } from "./router/AppRouters";
import { AppTheme } from "./theme";

export const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouters />
      </AppTheme>
    </>
  );
};
