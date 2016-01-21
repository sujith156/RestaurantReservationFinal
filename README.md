                                    ##RESTAURANT RESERVATION WEB APPLICATION
This read me will help you to use, configure and build the web application.

                                                    #Description
This web application helps two kinds of users namely 'guest' and 'owner' to perform restaurant related operations.
-> Guest can use this application to create, edit or cancel a reservation.
-> Owner who should be authenticated can use this application to perform all the operations that a normal guest can
   and additionally he has privileges to View all reservations, View Seating, Change seating, View/update profile and
   view customer contacts.
                                                    #Technologies
There application consists ot 2 modules namely Client and Server.
-> Client is built using AngularJS and other front end technologies like HTML5, CSS3, Javascript, Bootstrap etc. Classes
    like $http is used to execute get, put, post and delete request operations from REST API.
-> Server is developed using .NET WCF Framework, SQL Server 2012, C# Scripting, Entity Model (Schema First Approach).
    Properties like Service Contracts, Operations Contracts, Web Invoke etc are used.

                                                    #Installation
-> Client can be run using WebStorm IDE. Installation of Node.js required to configure the application.
    Environment: WebStorm IDE, Node.JS
-> Server can be run using Visual Studio 2013 (.NET 4.5 Framework) or above which has inbuilt IIS server can be used. Entity
    Framework 5 need to be installed. SQL Server 2012 server and SQL Server 2012 Management Studio needs to be installed.
    Environment: Visual Studio Ultimate 2013, SQL Server 2012.

                                                    #Configuration
-> Cross-Origin resource sharing should be enabled by the browser.
-> install npm
-> Check all the dependencies
-> install bower (if required)


                                                    #DirectoryStructure
--> Client
    -app
        -guest
            -controllers
            -MasterPage_Contents
            -services
            -templates
        -owner
            -controllers
            -services
            -templates
        app.js
    -css
    -dist
    -images
    -tests
    Gruntfile.js
    index.html
    package.json

--> Server
    packages
    RESTApp1
    RESTApp1.sql
    RESTApp1.sln
    RESTApp11.v12.suo




