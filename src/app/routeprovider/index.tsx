"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Login from "../pages/auth";
import Dashboard from "../pages/dashboard";

interface RouteContextValues {
  page: 0 | 1 | 2;
  handleSetPage: (newPage: 0 | 1 | 2) => void;
}

const RouteContext = createContext<RouteContextValues>({
  page: 0,
  handleSetPage: () => {},
});

interface RouteProviderOptions {
  children?: React.ReactNode;
}

export const RouteProvider = ({ children }: RouteProviderOptions) => {
  const [page, setPage] = useState<0 | 1 | 2>(2);

  const handleSetPage = (newPage: 0 | 1 | 2) => {
    if (page !== newPage) {
      setPage(newPage);
    }
  };

  const value = {
    page,
    handleSetPage,
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export const useRoute = () => {
  return useContext(RouteContext);
};
