# Demo Login screen in dotnet core 2.0 project
Demo of Login in a simple dotnet core angular project.

The project was created using [JavaScriptServices](https://github.com/aspnet/JavaScriptServices) template:

```
$ dotnet new -l
$ ...
$ ASP.NET Core with Angular                         angular           [C#]              Web/MVC/SPA
$ ...
$ mkdir <project-name>
$ cd <project-name>
$ dotnet new angular
```

Steps to run:
1. Clone the repo
2. Update references
```
$ npm install
$ dotnet restore
```

3. Run the project

```
$ dotnet run
```

The project use routing and guards angular features. The guard prevent the component be show to an un-autheticate user. In order to authenticate you can use any username but use password 'password'.
The authtentication function use a sample service implemented in the server through a controller.
