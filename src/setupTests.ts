import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

(window as any).$ = {
  ig: {
    RevealSdkSettings: {
      setBaseUrl: () => {},
      theme: {}
    },
    RevealTheme: function () {
      return {};
    },
    RVDashboard: {
      loadDashboard: () => {},
    },
    RevealView: function () {}
  }
};

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);
