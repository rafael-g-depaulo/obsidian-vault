# [Boost your productivity by creating your own CLI command with typescript (Part 1) 🔥 - DEV Community](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-part-1-5g37)

Your **daily productivity** can be **greatly improved** 🚀 if you can **automate** all the tasks you used to do.

Thanks to **node, npm, npx and typescript**: creating a **CLI command** and making it available on your system or globally has never been easier.

As an example, we will create a CLI command to get a stock value for a symbol. This command will be called **pique-sous** (as a reference to the Disney character "Uncle $crooge" in french 😄 🦆)  

```sh
pique-sous MSFT SFIX GOOG
```

Enter fullscreen modeExit fullscreen mode

Result:  

```
Retrieving stock information for MSFT at date 2021-01-10T01:37:57.574Z
{
  language: 'en-US',
  region: 'US',
  quoteType: 'EQUITY',
  quoteSourceName: 'Delayed Quote',
  regularMarketOpen: 218.68,
  exchange: 'NMS',
  shortName: 'Microsoft Corporation',
  longName: 'Microsoft Corporation',
  messageBoardId: 'finmb_21835',
  exchangeTimezoneName: 'America/New_York',
  exchangeTimezoneShortName: 'EST',
  gmtOffSetMilliseconds: -18000000,
  market: 'us_market',
  esgPopulated: false,
  displayName: 'Microsoft',
  symbol: 'MSFT'}
```

Enter fullscreen modeExit fullscreen mode

The final results in available at [https://github.com/raphaelmansuy/pique-sous](https://github.com/raphaelmansuy/pique-sous) and published at [https://www.npmjs.com/package/pique-sous](https://www.npmjs.com/package/pique-sous).

This article was originally published at [https://www.elitizon.com/](https://www.elitizon.com/)

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-part-1-5g37#%F0%9F%8F%97-6-easy-steps-to-make-it-happen-) 🏗 **6 Easy steps to make it happen !**
----------

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-part-1-5g37#step1-creating-a-basic-typescript-project) Step1 : creating a basic typescript project
----------

✅ Create a directory called **pique-sous**  

```
$ mkdir ./pique-sous

```

Enter fullscreen modeExit fullscreen mode

✅ create a file **index.ts** under **pique-sous**  

```
$ cd ./pique-sous
$ touch ./index.ts

```

Enter fullscreen modeExit fullscreen mode

As a result, you should have:  

```
pique-sous
└── index.ts

```

Enter fullscreen modeExit fullscreen mode

✅ Edit the **index.ts** and add a simple command for testing such as:  

```
constcurrentDateAndTime=newDate().toIsoString()console.log(currentDateTime)
```

Enter fullscreen modeExit fullscreen mode

✅ Execute and test the file with ts-node  

```

npx ts-node index.ts

```

Enter fullscreen modeExit fullscreen mode

>
>
> **npx** is a tool from the NPM registry allowing executing commands without installation  
> **ts-node** is a node version supporting typescript directly
>
>

As a result you should have something like this:  

```
2021-01-10T02:37:49.683Z

```

Enter fullscreen modeExit fullscreen mode

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-part-1-5g37#step2-make-the-file-executable) Step2 : make the file executable
----------

✅ Modify the **index.ts** file such as  

```
#!/usr/bin/env npx ts-node
constcurrentDateAndTime=newDate().toIsoString()console.log(currentDateTime)
```

Enter fullscreen modeExit fullscreen mode

>
>
> The first line **#!/usr/bin/env npx ts-node** specifies that the file must be executed by npx and ts-node
>
>

✅ Add the **executable permission** to the **index.ts** file  

```
$ chmod u+x ./index.ts

```

Enter fullscreen modeExit fullscreen mode

✅ Test the file  

```
$ ./index.ts

```

Enter fullscreen modeExit fullscreen mode

Results:  

```
$ ./index.ts
$ 2021-01-10T03:24:43.190Z

```

Enter fullscreen modeExit fullscreen mode

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-part-1-5g37#step-3-package-the-project) Step 3: package the project
----------

✅ Add package.json file

Inside the directory use the npm command to create a package.json file  

```
$ npm init

```

Enter fullscreen modeExit fullscreen mode

Answer the questions:  

```
package name: (pique-sous)
version: (1.0.0)
description: A simple package
entry point: (index.js) bin/index.js
test command:
git repository:
keywords:
author: raphael mansuy
license: (ISC) MIT
About to write to /Users/raphaelmansuy/Projects/Github/raphaelmansuy/ElitizonWeb/data/blog/2021/01-09-how-to-create-a-cli-command-with-typescript/steps/step01/pique-sous/package.json:

{"name": "pique-sous",
  "version": "1.0.0",
  "description": "A simple package",
  "main": "bin/index.js",
  "scripts": {"test": "echo \"Error: no test specified\" && exit 1"},
  "author": "raphael mansuy",
  "license": "MIT"}
```

Enter fullscreen modeExit fullscreen mode

✅ Configure compilation from typescript to javascript

Create a file called **tsconfig.json** as follow:  

```
{"compilerOptions":{"module":"commonjs","target":"es2017","lib":["es2015"],"moduleResolution":"node","sourceMap":true,"outDir":"bin","baseUrl":".","paths":{"*":["node_modules/*","src/types/*"]},"emitDecoratorMetadata":true,"experimentalDecorators":true},"include":["src/**/*"]}
```

Enter fullscreen modeExit fullscreen mode

✅ Create a **src** directory and move the **index.ts** in the **./src** directory  

```
$ mkdir ./src
$ mv ./index.ts ./src

```

Enter fullscreen modeExit fullscreen mode

Results:  

```
.
├── package.json
├── src
│   └── index.ts
└── tsconfig.json

1 directory, 3 files

```

Enter fullscreen modeExit fullscreen mode

✅ Add typescript support for the compilation  

```
$ yarn add typescript @types/node -D
```

Enter fullscreen modeExit fullscreen mode

Result:  

```
yarn add v1.22.10
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 2 new dependencies.
info Direct dependencies
├─ @types/node@14.14.20
└─ typescript@4.1.3
info All dependencies
├─ @types/node@14.14.20
└─ typescript@4.1.3
✨  Done in 1.44s.

```

Enter fullscreen modeExit fullscreen mode

The **package.json** should look like this:  

```
{"name":"pique-sous","version":"1.0.0","description":"A simple package","main":"bin/index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"author":"raphael mansuy","license":"MIT","devDependencies":{"@types/node":"^14.14.20","typescript":"^4.1.3"}}
```

Enter fullscreen modeExit fullscreen mode

✅ Edit the **package.json** as follow

👉 add "bin" entry with value "bin/index.js"  
👉 add "build" command in "scripts"  

```
{"name":"pique-sous","version":"1.0.0","description":"A simple package","main":"bin/index.js","bin":"bin/index.js","scripts":{"build":"tsc","test":"echo \"Error: no test specified\" && exit 1"},"author":"raphael mansuy","license":"MIT","devDependencies":{"@types/node":"^14.14.20","typescript":"^4.1.3"}}
```

Enter fullscreen modeExit fullscreen mode

✅ Edit the **index.ts** as follow

👉 replace npx ts-node by node because the result of the compilation by typescript compiler will be a javascript file  

```
#!/usr/bin/env node
constcurrentDateTime=newDate().toISOString()console.log(currentDateTime)
```

Enter fullscreen modeExit fullscreen mode

✅ Build  

```
yarn build

```

Enter fullscreen modeExit fullscreen mode

Results:  

```
yarn run v1.22.10
$ tsc
✨  Done in 1.66s.

```

Enter fullscreen modeExit fullscreen mode

The bin directory contains now the outcome of the compilation process:  

```
$ tree ./bin
./bin
├── index.js
└── index.js.map

0 directories, 2 files

```

Enter fullscreen modeExit fullscreen mode

✅ Make **./bin/index.js** executable  

```
chmod u+x ./bin/index.js

```

Enter fullscreen modeExit fullscreen mode

✅ Test the result  

```
./bin/index.js

```

Enter fullscreen modeExit fullscreen mode

Result:  

```
❯ pique-sous
2021-01-10T04:33:08.303Z

```

Enter fullscreen modeExit fullscreen mode

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-part-1-5g37#step-4-publish-the-command-locally) Step 4: publish the command locally
----------

🔥 The command can now be made available for use locally:  

```
$ yarn link--global
```

Enter fullscreen modeExit fullscreen mode

Result:  

```
yarn link v1.22.10
success Registered "pique-sous".
info You can now run `yarn link"pique-sous"`in the projects where you want to use this package and it will be used instead.
✨  Done in 0.04s.

```

Enter fullscreen modeExit fullscreen mode

🎉 💪 We can now use the command from everywhere  

```
❯ pique-sous
2021-01-10T05:45:10.586Z

```

Enter fullscreen modeExit fullscreen mode

🌈 🙈 We can unregister the command with:  

```
$ yarn unlink--global
```

Enter fullscreen modeExit fullscreen mode

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-part-1-5g37#step-5-publish-the-cli-command-on-wwwnpmjsorg) Step 5: publish the cli command on [www.npmjs.org](http://www.npmjs.org)
----------

👉 First, you need to signup and create an account on [https://www.npmjs.com/](https://www.npmjs.com/)  
👉 🧨 You need to be sure that the name of your package is not taken on npmjs.com, the name of the package in the package.json must be modified it the name already exists on npm.

Type the following command in the base directory:  

```
$ npm publish

```

Enter fullscreen modeExit fullscreen mode

Enter your npm credentials

Result:  

```
npm notice
npm notice 📦  pique-sous@1.0.0
npm notice === Tarball Contents ===
npm notice 133B bin/index.js    
npm notice 198B bin/index.js.map
npm notice 372B package.json    
npm notice 100B src/index.ts    
npm notice 364B tsconfig.json   
npm notice === Tarball Details ===
npm notice name:          pique-sous                              
npm notice version:       1.0.0                                   
npm notice filename:      pique-sous-1.0.0.tgz                    
npm notice package size:  810 B                                   
npm notice unpacked size: 1.2 kB                                  
npm notice shasum:        6c8aea7b85c125a2d9dbbeec81d15ef94b07240a
npm notice integrity:     sha512-ozbnViT18DSUI[...]FquBcXBSV8f2g==
npm notice total files:   5                                       
npm notice

```

Enter fullscreen modeExit fullscreen mode

**Your command is now published on npm** and be installed or executed from everywhere.

Example:

Execution without formal installation:  

```
npx pique-sous

```

Enter fullscreen modeExit fullscreen mode

Or global installation:  

```
npm install-g pique-sous

```

Enter fullscreen modeExit fullscreen mode

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-part-1-5g37#step-6-add-yahoo-finance-get-stocks-information) Step 6: Add Yahoo finance get stocks information
----------

✅ Install axios library  

```
yarn add axios

```

Enter fullscreen modeExit fullscreen mode

✅ Add file ./src/getStock.ts  

```
importaxiosfrom"axios"exportconstgetSingleStockInfo=async(stock:string)=>{if(!stock){thrownewError("Stock symbol argument required")}if(typeofstock!=="string"){thrownewError(`Invalid argument type for stock argument. Required: string. Found: ${typeofstock}`)}consturl=`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}`constres=awaitaxios.get(url)const{data}=resif(!data||!data.quoteResponse||!data.quoteResponse.result||data.quoteResponse.result.length===0){thrownewError(`Error retrieving info for symbol ${stock}`)}constquoteResponse=data.quoteResponse.result[0]returnquoteResponse}
```

Enter fullscreen modeExit fullscreen mode

✅ Add file "./src/getVersion.ts"  

```
import*asfsfrom"fs"import*asPathfrom"path"exportconstgetVersion=()=>{constpackageJSONPath=Path.resolve(__dirname,"../package.json")constcontent=fs.readFileSync(packageJSONPath,{encoding:"utf8"})constconfig=JSON.parse(content)returnconfig.version}
```

Enter fullscreen modeExit fullscreen mode

✅ Modify ./src/index.ts  

```
#!/usr/bin/env node
import{getSingleStockInfo}from"./getStock"import{getVersion}from"./getVersion"/**
 *  return the arguments of the command except node and index.ts
 */constgetArgs=()=>{// We retrieve all the command argumnts except the first 2constargs=process.argv.slice(2)returnargs}/**
 * Command Help
 */constprintCommandHelp=()=>{constversion=getVersion()consthelp=`
pique-sous (version: ${version})

A simple command to retrieve stock information.

Example:

$ pique-sous MSFT SFIX GOOG

`console.log(help)}constsymbols=getArgs()// Print help if no argumentsif(symbols.length===0){printCommandHelp()getVersion()process.exit(0)}constnow=newDate().toISOString()// Call the yahoo API for each symbol and display the result on the consolesymbols.forEach((symbol)=>{console.log(`Retrieving stock information for ${symbol} at date ${now}`)getSingleStockInfo(symbol).then(console.log)})
```

Enter fullscreen modeExit fullscreen mode

✅ Increment the version number in package.json to 1.1.0 ("version")  

```
{"devDependencies":{"@types/axios":"^0.14.0","@types/node":"^14.14.20"},"name":"pique-sous","version":"1.1.0","description":"A simple command to retrieve stock information","main":"./bin/index.js","dependencies":{"axios":"^0.21.1","typescript":"^4.1.3"},"bin":"bin/index.js","scripts":{"build":"tsc","test":"echo \"Error: no test specified\" && exit 1"},"keywords":["cli","node","typescript","npm","stock","yahoo finance"],"contributors":["raphaelmansuy"],"repository":{"url":"https://github.com/raphaelmansuy/pique-sous.git","type":""},"author":{"email":"raphael.mansuy@gmail.com","name":"raphaelmansuy"},"license":"MIT"}
```

Enter fullscreen modeExit fullscreen mode

✅ Build a new version  

```
$ yarn build

```

Enter fullscreen modeExit fullscreen mode

✅ Test locally

Publish the component:  

```
$ yarn link--global
```

Enter fullscreen modeExit fullscreen mode

✅ Execute  

```
$ pique-sous MSFT

```

Enter fullscreen modeExit fullscreen mode

Result:  

```
Retrieving stock information for MSFT at date 2021-01-10T06:11:41.305Z
{
  language: 'en-US',
  region: 'US',
  quoteType: 'EQUITY',
  quoteSourceName: 'Delayed Quote',
  triggerable: true,
  currency: 'USD',
  exchange: 'NMS',
  shortName: 'Microsoft Corporation',
  longName: 'Microsoft Corporation',
  messageBoardId: 'finmb_21835',
  exchangeTimezoneName: 'America/New_York',
  exchangeTimezoneShortName: 'EST',
  gmtOffSetMilliseconds: -18000000,

  ...

```

Enter fullscreen modeExit fullscreen mode

🔥🔥🔥 The package can now be republished on **npm** 💪.

# [Boost your productivity by creating your own CLI command with typescript  and OCLIF (Part 2) 🚀 - DEV Community](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk)
[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk#context) Context
----------

[OCLIF](https://oclif.io/) is a wonderful framework that makes it easy to develop a professional CLI command. Let's see how we can create a CLI command that will delight your end-user in less than 3 minutes.

The final project is published on [https://github.com/raphaelmansuy/matcha-stock](https://github.com/raphaelmansuy/matcha-stock)

Add a 🌟 on the project if you have enjoyed this tutorial ❤️  

```
$ matcha-stock -symbol=MSFT

```

Enter fullscreen modeExit fullscreen mode

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk#lets-go-) Lets go ! 🚀
----------

### [](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk#create-a-new-command-with-oclif-30-seconds-) Create a new command with OCLIF (30 seconds ⏰) ###

```
npx oclif single matcha-stock
cd matcha-stock
./bin.run

```

Enter fullscreen modeExit fullscreen mode

**Result:**

OCLIF generates a starting project for my command.  

```
❯ npx oclif single matcha-stock

     _-----_     ╭──────────────────────────╮
    |       |    │      Time to build a     │
    |--(o)--|    │  single-command CLI with │
   `---------´   │  oclif! Version: 1.16.1  │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

 npm package name matcha-stock
? command bin name the CLI will export matcha-stock
? description A command to get stocks information
? author Raphael MANSUY @raphaelmansuy
? version 0.0.1
? license MIT
? Who is the GitHub owner of repository (https://github.com/OWNER/repo) raphaelmansuy
? What is the GitHub name of repository (https://github.com/owner/REPO) matcha-stock
? Select a package manager yarn
? TypeScript Yes
? Use eslint (linter for JavaScript and Typescript) Yes
? Use mocha (testing framework) Yes

```

Enter fullscreen modeExit fullscreen mode

**Code created by OCLIF**  

```
├── README.md
├── bin
│   ├── run
│   └── run.cmd
├── package.json
├── src
│   └── index.ts
├── test
│   ├── index.test.ts
│   ├── mocha.opts
│   └── tsconfig.json
├── tsconfig.json
└── yarn.lock

```

Enter fullscreen modeExit fullscreen mode

**Content of `src/index.ts`**  

```
import{Command,flags}from"@oclif/command"classMatchaStockextendsCommand{staticdescription="describe the command here"staticflags={// add --version flag to show CLI versionversion:flags.version({char:"v"}),help:flags.help({char:"h"}),// flag with a value (-n, --name=VALUE)name:flags.string({char:"n",description:"name to print"}),// flag with no value (-f, --force)force:flags.boolean({char:"f"})}staticargs=[{name:"file"}]asyncrun(){const{args,flags}=this.parse(MatchaStock)constname=flags.name??"world"this.log(`hello ${name} from ./src/index.ts`)if(args.file&&flags.force){this.log(`you input --force and --file: ${args.file}`)}}}export=MatchaStock
```

Enter fullscreen modeExit fullscreen mode

✅ OCLIF has created a template class that represents the skeleton of my command.

**Starting from the generated code I can:**

* 💪 add **flags** such as **`--symbol`**
* 🏗 modify the implementation of the **`run()`** method

### [](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk#add-the-support-of-the-flag-raw-symbol-endraw-40-seconds-) Add the support of the flag `--symbol` (40 seconds ⏰) ###

```
import{Command,flags}from"@oclif/command"classMatchaStockextendsCommand{staticdescription="A simple command to retrieve stock information from Yahoo Finance"staticflags={// add --version flag to show CLI versionversion:flags.version({char:"v"}),help:flags.help({char:"h"}),// Add Support of of -symbol flag// flag with a value (-s, --symbol=VALUE)symbol:flags.string({char:"s",// Alias for my flagdescription:"stock symbol to retrieve",// A description of the symbol flagrequired:true,// The flag symbol is required 👉 The command will abort of the flag is not providehelpValue:"MSFT"// An example of flag value (MSFT is the symbol for Microsoft)})}asyncrun(){const{args,flags}=this.parse(MatchaStock)this.log(`Get Symbol=${flags.symbol} from ./src/index.ts`)}}export=MatchaStock
```

Enter fullscreen modeExit fullscreen mode

**I can now test my command**

✅ With no flag  

```
./bin

```

Enter fullscreen modeExit fullscreen mode

**result**:  

```
 ›   Error: Missing required flag:
 ›    -s, --symbol SYMBOL  stock symbol to retrieve
 ›   See more help with --help
```

Enter fullscreen modeExit fullscreen mode

✅ With flag -help  

```
./bin -help
```

Enter fullscreen modeExit fullscreen mode

**result**:  

```
❯ ./bin/run -help
A simple command to retrieve stock information from Yahoo Finance

USAGE
\$ matcha-stock

OPTIONS
-h, --help show CLI help-s, --symbol=MSFT (required) stock symbol to retrieve
-v, --version show CLI version

```

Enter fullscreen modeExit fullscreen mode

✅ With flag `--symbol`  

```
./bin --symbol GOOG

```

Enter fullscreen modeExit fullscreen mode

**result**:  

```
❯ ./bin/run  -symbol=GOOG
Get Symbol=ymbol=GOOG from ./src/index.ts

```

Enter fullscreen modeExit fullscreen mode

### [](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk#add-the-business-logic-60-seconds-) Add the business logic (60 seconds ⏰) ###

👉 Add [axios](https://github.com/axios/axios) as our http library.  

```
yarn add axios

```

Enter fullscreen modeExit fullscreen mode

👉 Add the file `./src/getStock.ts`  

```
importaxiosfrom"axios"exportconstgetSingleStockInfo=async(stock:string)=>{if(!stock){thrownewError("Stock symbol argument required")}if(typeofstock!=="string"){thrownewError(`Invalid argument type for stock argument. Required: string. Found: ${typeofstock}`)}consturl=`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}`constres=awaitaxios.get(url)const{data}=resif(!data||!data.quoteResponse||!data.quoteResponse.result||data.quoteResponse.result.length===0){thrownewError(`Error retrieving info for symbol ${stock}`)}constquoteResponse=data.quoteResponse.result[0]returnquoteResponse}
```

Enter fullscreen modeExit fullscreen mode

👉 Modify the `src/index.ts` file such as:  

```
import{Command,flags}from"@oclif/command"import{getSingleStockInfo}from"./getStocks"classMatchaStockextendsCommand{staticdescription=`A simple command to retrieve stock information from Yahoo Finance.\nA simple command to retrieve stock information from Yahoo Finance.\n\n Created with ❤️ by Elitizon (https://www.elitizon.com)`staticflags={// add --version flag to show CLI versionversion:flags.version({char:"v"}),help:flags.help({char:"h"}),// Add Support of of -symbol flag// flag with a value (-s, --symbol=VALUE)symbol:flags.string({char:"s",// Alias for my flagdescription:"stock symbol to retrieve",// A description of the symbol flagrequired:true,// The flag symbol is required 👉 The command will abort of the flag is not providehelpValue:"MSFT"// An example of flag value (MSFT is the symbol for Microsoft)})}asyncrun(){const{flags}=this.parse(MatchaStock)constres=awaitgetSingleStockInfo(flags.symbol)// Print the result as tabularconsole.table(res)}}export=MatchaStock
```

Enter fullscreen modeExit fullscreen mode

👉 Test the command  

```
❯ ./bin/run  -s=MSFT
┌───────────────────────────────────┬─────────────────────────┐
│              (index)              │         Values          │
├───────────────────────────────────┼─────────────────────────┤
│             language              │         'en-US'         │
│              region               │          'US'           │
│             quoteType             │        'EQUITY'         │
│          quoteSourceName          │     'Delayed Quote'     │
│            triggerable            │          true           │
│             currency              │          'USD'          │
│    firstTradeDateMilliseconds     │      511108200000       │
│             priceHint             │            2            │
│            marketState            │       'POSTPOST'        │
│      postMarketChangePercent      │       0.31417143        │

```

Enter fullscreen modeExit fullscreen mode

### [](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk#publish-the-command-to-npmorg-30-seconds-) Publish the command to [NPM.org](https://www.npmjs.org) (30 seconds ⏰) ###

```
npm publish

```

Enter fullscreen modeExit fullscreen mode

✅ The package is now published on [npm.org](https://www.npmjs.org) at [https://www.npmjs.com/package/matcha-stock](https://www.npmjs.com/package/matcha-stock)

* 👉 You have to change the name of the package if the package is already registered on [NPM](https://npmjs.com).
* 👉 The package version must be updated each time you publish

### [](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk#test-your-command-10-seconds-) Test your command (10 seconds ⏰) ###

```
npm install-g matcha-stock
matcha-stock -s=MSFT

```

Enter fullscreen modeExit fullscreen mode

[](https://dev.to/raphaelmansuy/boost-your-productivity-by-creating-your-own-cli-command-with-typescript-and-oclif-part-2-1jlk#conclusion) Conclusion
----------

[OCLIF](https://oclif.io/) is an impressive framework. With OCLIF it's easy to create:

* Single-Command CLI
* Multi-command CLI

**Main features**:

* 🕺 Flag/Argument parsing
* 🚀 Super Speed
* 🏗 Include a CLI generator to speed the development of commands
  * Testing Helpers
  * Auto-Documentation
  * Plugins
  * Hooks

OCLIF is available on [Github](https://github.com/oclif) and maintained by [Matt Graham](https://twitter.com/mattgraham), [Paul Elliott](https://github.com/paulelliott) and [Chris Castle](https://github.com/crcastle) and funded by [Heroku](https://www.heroku.com) 🎉