## GoldenVitrin Vendor Frontend

This is Next.js Project can Run with **[Node 20](https://nodejs.org/dist/v20.9.0/)** This project support CLI commands.

## Getting Started

First run the development server:

```bash

npm  run  dev

# or

yarn  dev

# or

pnpm  dev

# or

bun  dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About the project

The structure of this project is modular and it is **important** that you continue the development of this project with this structure.
The following tools are used for this project:

1.  Next.js 14
2.  @reduxjs/toolkit
3.  antd
4.  dayjs
5.  formik
6.  typescript
7.  tailwindcss

## Important points

1.  An important point is that you should **only use the antd** library
    to develop components, and **adding any library without coordination
    with other team members is not allowed**.
2.  **Tailwind** library is used for styling and you must use this library for styling and **styling with other libraries is not
    allowed**.
3.  Follow the project structure and be sure to **use command lines** to add
    components, APIs, etc. Following the structure makes easier
    for the programmers after you and avoids spaghetti code.
4.  In order for your changes to be added to the project, be sure to follow the **Gitflow rules**.
5.  **Each folder in this structure has a file called README in it that you should read.**

## Commands

| Make          | Comamnd                         |
| ------------- | ------------------------------- |
| **Module**    | `npm run create:module NAME`    |
| **API**       | `npm run create:api NAME`       |
| **Component** | `npm run create:component NAME` |
| **Config**    | `npm run create:config NAME`    |
| **Constant**  | `npm run create:constant NAME`  |
| **Context**   | `npm run create:context NAME`   |
| **Hook**      | `npm run create:hook NAME`      |
| **Type**      | `npm run create:type NAME`      |
| **Utility**   | `npm run create:utility NAME`   |
| **Slice**     | `npm run create:slice NAME`     |

# Modules

Another way to organize things is to introduce **modules**.  
Modules help group together code that is related to each other. They're not a replacement for what's common.
Imagine we added a new `src/modules/` folder where we group all the files related to a feature (here for example `Login`), instead of splitting the "Login" code all over the place, now in one folder The unit is concentrated.

Creating `Login` module involves organizing its components and types in close proximity. In this context, "components" refer to placing module-specific parts within the designated component folder associated with that module.

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files in each directory of a module must follow the extension rules. For example, the files in the components directory should be in the form `sample-name.component.tsx` and the files in the types directory should be in the form `sample-name.type.ts`.
3.  Components should **have interface**.
4.  For create new module you **should** use `npm run create:module MODULE_NAME`. You are **not** allowed to create module files manually.

# Examples

Suppose we want to create a **Login Module**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:module login`.
2.  A directory with the name `login` will be created in `/src/modules` directory.

    ```lua
    src
    └── modules
    	    └── login
    	        ├── components
    	        │   └── sample.component.tsx
    	        ├── types
    	        │   └── sample.type.ts
    	        ├── login.module.tsx
    	        └── index.ts
    ```

3.  A directory with the name `login` will be created in `/src/app` directory.
    ```lua
    	src
    	└── app
    		 └── login
    		        └── page.tsx
    ```

# Apis

This section is for placing API services that are written with **[ReduxToolkitQuery(RTK)](https://redux-toolkit.js.org/rtk-query/overview)**.

## Rules

1.  Naming your files **should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).
2.  The files **should** have extensions _`sample-name.api.ts`_.
3.  Create only **one** file for several APIs related to the same service. For example, the user service `CRUD APIs(Create, Read, Update and Delete)` are all placed in one file named `users.api.ts` , and you are **not** allowed to create multiple files for each API like `create-user.api.ts, delete-user.api.ts and ....`
4.  At the time of writing the API should be written based on **typescript**. An interface **must be written** for payload and response of **each api**.
5.  For create new api you **should** use `npm run create:api API_NAME`. You are **not** allowed to create api files manually.

# Examples

Suppose we want to create a **user** service, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:api users`.
2.  A file with the name `users.api.ts` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
// Need to use the React-specific entry point to allow generating React hooks
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithInterceptors } from '@/common/utils/base-query.utility';
import { UsersItem, UsersQueryParams } from '@/common/types/users.types';
import { ItemsResponse } from '@/common/types/response.types';
import apis from '@/common/constants/apis.constant';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseQueryWithInterceptors,
  endpoints: (builder) => ({
    getAllUserss: builder.query<ItemsResponse<UsersItem>, UsersQueryParams>({
      query: (params) => ({
        url: apis.get('YOUR_API_NAME')?.path,
        params,
      }),
    }),
  }),
});

// For use in functional components
export const {
  useGetAllUserssQuery,
  util: { getRunningQueriesThunk },
} = usersApi;
```

- Be sure to use `apis.get('YOUR_API_NAME')?.path` to specify the API path.

# Components

This section is for your components.
I believe that if you want your application to be able to develop quickly, you should componentize every small element. Even small things like a **text component**.

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files \***\*should** have extensions\*\* _`sample-name.component.ts`_.
3.  your component props should **have interface**.
4.  For create new api you **should** use `npm run create:component COMPONENT_NAME`. You are **not** allowed to create component files manually.
5.  You **should use [tailwindcss](https://tailwindcss.com/)** for style elements of component.

# Examples

Suppose we want to create a **Button component**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:component button`.
2.  A file with the name `button.component.tsx` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
import React,  {  ReactNode  }  from  'react';

type  Props  =  {
	children:  ReactNode;
};

export  default  function  Button({  children  }:  Props)  {
	return  <div  className='flex items-center justify-center'>{children}</div>;
}
```

Now you can customize your button component :)

# Configs

This section is for your configs.

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files \***\*should** have extensions\*\* _`sample-name.config.ts`_.
3.  your config props should **have interface**.
4.  For create new config you **should** use `npm run create:config CONFIG_NAME`. You are **not** allowed to create config files manually.

# Examples

Suppose we want to create a **App Config**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:config app`.
2.  A file with the name `app.config.ts` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
interface AppConfig {
  siteNameFa: string;
  siteNameEn: string;
  siteDescription: string;
  siteUrl: string;
  themeColor: string;
  mobileWidth: number;
}

export const appConfig: AppConfig = {
  siteNameFa: 'عنوان فارسی',
  siteDescription: '...',
  siteNameEn: 'EnglishName',
  siteUrl: 'https://name.com',
  themeColor: '#0d5984',
  mobileWidth: 450,
};
```

Now you can customize your app config :)

# Constants

You should use this directory to define anything static. Definition of **endpoint APIs**, **regex**, **Farsi equivalent** of statuses, etc. should all be placed in this section.

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files \***\*should** have extensions\*\* _`sample-name.constant.ts`_.
3.  your constant props should **have interface**.
4.  For create new constant you **should** use `npm run create:constant CONSTANT_NAME`. You are **not** allowed to create constant files manually.

# Examples

Suppose we want to create a **User statuses Constant**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:constant users`.
2.  A file with the name `users.constant.ts` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
interface UsersType {}
export const users: UsersType = {};
```

4.  Now customize our users constant:

```ts
interface UsersType {
  statuses: {
    [key: string]: string;
  };
}

export const users: UsersType = {
  statuses: {
    active: 'فعال',
    deActive: 'غیر فعال',
  },
};
```

# Contexts

Place React contexts in this section. For more information on what contexts are, [read here](https://react.dev/reference/react/createContext).

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files \***\*should** have extensions\*\* _`context.constant.ts`_.
3.  your context should **have interface**.
4.  For create new constant you **should** use `npm run create:context CONTEXT_NAME`. You are **not** allowed to create context files manually.

# Examples

Suppose we want to create a **Layout Context**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:context layout`.
2.  A file with the name `layout.context.ts` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
import { createContext } from 'react';

interface LayoutContext {}

const layoutContext = createContext<LayoutContext | null>(null);

export default layoutContext;
```

4.  Now customize our layout context:

```ts
import { createContext } from 'react';

interface LayoutContext {
  mode: 'dark' | 'light';
}

const layoutContext = createContext<LayoutContext | null>(null);

export default layoutContext;
```

# Hooks

If you want to create your own custom hook, you should place it here. If you don't know how to create a custom hook, [read here](https://react.dev/learn/reusing-logic-with-custom-hooks).

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files \***\*should** have extensions\*\* _`use-sample-name.hook.ts`_.
3.  your hook function return should **have interface**.
4.  For create new constant you **should** use `npm run create:hook HOOK_NAME`. You are **not** allowed to create hook files manually.

# Examples

Suppose we want to create a **Online Status**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:hook online-status`.
2.  A file with the name `use-online-status.hook.ts` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [sample, setSample] = useState<boolean>(false);

  useEffect(() => {
    //do some thing ...
  }, []);

  return sample;
}
```

4.  Now customize our hook.

```ts
import { useState, useEffect } from 'react';
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
```

# Slices

A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. read more information [here](https://redux-toolkit.js.org/api/createslice).

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files \***\*should** have extensions\*\* _`sample-name.slice.ts`_.
3.  Your slice should **have interface**.
4.  For create new slice you **should** use `npm run create:slice SLICE_NAME`. You are **not** allowed to create slice files manually.

# Examples

Suppose we want to create a **Counter Slice**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:slice counter`.
2.  A file with the name `counter.slice.ts` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  name: string;
}

const initialState: InitialState = { name: 'Saber' };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    sample(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { sample } = counterSlice.actions;

export default counterSlice.reducer;
```

4.  Now customize our slice.

```ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  value: number;
}

const initialState: InitialState = { value: 0 };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

# Types

Put all the types that you are sure can be used in several places in this section. For example, the `ResponseItem` type is used in all APIs and it is not logical to define it in all files. Therefore, it is placed in this section.

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files \***\*should** have extensions\*\* _`sample-name.type.ts`_.
3.  For create new constant you **should** use `npm run create:type TYPE_NAME`. You are **not** allowed to create type files manually.

# Examples

Suppose we want to create a **APIs Response**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:type response`.
2.  A file with the name `response.type.ts` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
export interface ResponseType {}
```

4.  Now customize our type.

```ts
export interface ResponseItemsType<T> {
  data: {
    items: T;
  };
}

export interface ResponseItemType<T> {
  data: T;
}
```

# Utils

JavaScript utility functions are useful, reusable snippets that you can reuse across many different projects. Their purpose is to provide a consistent and efficient answer to common tasks and help improve the consistency of your code.

## Rules

1.  Naming your files \***\*should** follow the [kabab-case rule](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).\*\*
2.  The files \***\*should** have extensions\*\* _`sample-name.utility.ts`_.
3.  your utility function should **have interface**.
4.  For create new utility you **should** use `npm run create:utility UTILITY_NAME`. You are **not** allowed to create utility files manually.

# Examples

Suppose we want to create a **Currency function**, the steps are as follows:

1.  First run this command in [GitBash](https://gitforwindows.org/) terminal, `npm run create:utility currency`.
2.  A file with the name `currency.utility.ts` will be created in this directory.
3.  Open it and you will probably see something like this:

```ts
interface CurrencyUtilityParams {}

type CurrencyUtilityReturn = string;

export function currencyUtility(
  params: CurrencyUtilityParams
): CurrencyUtilityReturn {
  return '';
}
```

4.  Now customize our utility.

```ts
import appConfigs from '@/common/configs/appConfigs';

interface CurrencyUtilityParams {
  price: number;
}

type CurrencyUtilityReturn = string;

export function currencyUtility({
  price,
}: CurrencyUtilityParams): CurrencyUtilityReturn {
  return `${price}  ${appConfigs.currency}`;
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
