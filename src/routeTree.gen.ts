/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as IssuesListImport } from './routes/issues/list'
import { Route as IssuesIssueIndexImport } from './routes/issues/issue/index'
import { Route as IssuesIssueIdImport } from './routes/issues/issue/$id'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const IssuesListRoute = IssuesListImport.update({
  id: '/issues/list',
  path: '/issues/list',
  getParentRoute: () => rootRoute,
} as any)

const IssuesIssueIndexRoute = IssuesIssueIndexImport.update({
  id: '/issues/issue/',
  path: '/issues/issue/',
  getParentRoute: () => rootRoute,
} as any)

const IssuesIssueIdRoute = IssuesIssueIdImport.update({
  id: '/issues/issue/$id',
  path: '/issues/issue/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/issues/list': {
      id: '/issues/list'
      path: '/issues/list'
      fullPath: '/issues/list'
      preLoaderRoute: typeof IssuesListImport
      parentRoute: typeof rootRoute
    }
    '/issues/issue/$id': {
      id: '/issues/issue/$id'
      path: '/issues/issue/$id'
      fullPath: '/issues/issue/$id'
      preLoaderRoute: typeof IssuesIssueIdImport
      parentRoute: typeof rootRoute
    }
    '/issues/issue/': {
      id: '/issues/issue/'
      path: '/issues/issue'
      fullPath: '/issues/issue'
      preLoaderRoute: typeof IssuesIssueIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/issues/list': typeof IssuesListRoute
  '/issues/issue/$id': typeof IssuesIssueIdRoute
  '/issues/issue': typeof IssuesIssueIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/issues/list': typeof IssuesListRoute
  '/issues/issue/$id': typeof IssuesIssueIdRoute
  '/issues/issue': typeof IssuesIssueIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/issues/list': typeof IssuesListRoute
  '/issues/issue/$id': typeof IssuesIssueIdRoute
  '/issues/issue/': typeof IssuesIssueIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/issues/list' | '/issues/issue/$id' | '/issues/issue'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/issues/list' | '/issues/issue/$id' | '/issues/issue'
  id: '__root__' | '/' | '/issues/list' | '/issues/issue/$id' | '/issues/issue/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  IssuesListRoute: typeof IssuesListRoute
  IssuesIssueIdRoute: typeof IssuesIssueIdRoute
  IssuesIssueIndexRoute: typeof IssuesIssueIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  IssuesListRoute: IssuesListRoute,
  IssuesIssueIdRoute: IssuesIssueIdRoute,
  IssuesIssueIndexRoute: IssuesIssueIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/issues/list",
        "/issues/issue/$id",
        "/issues/issue/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/issues/list": {
      "filePath": "issues/list.tsx"
    },
    "/issues/issue/$id": {
      "filePath": "issues/issue/$id.tsx"
    },
    "/issues/issue/": {
      "filePath": "issues/issue/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
