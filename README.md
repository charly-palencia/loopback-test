# Loop Back Test

Updates

## Aug 27
Some Ideas & Descriptions

Bultin User/roles/ACL models

Bultin REST request for authentication

* ACL Access Control List

* **model config js**: configures LoopBack models, for example it binds models to data sources and specifies whether a model is exposed over REST.  in other words, you can create a the relation between model and persistence/Ext REST/remote hook/request hook

* **common/mixins** Mixins are used to apply common logic to a set of models. For example, a timestamp mixin could inject "created" and "modified" properties to model definitions.

* **apiDoc** https://apidocs.strongloop.com/loopback-datasource-juggler/#datasource-new-datasourcename-settings

* **middleware.json** concept of middleware phases it a about some params, methods that you can pass to all/specific action/route in different states /initial/auth/final etc

**boot** a.k.a. Initializers

###TODO

* Implement Postgres driver with StrongLoop. [Done]
* Create Auth Actions (they are built-in with loopback (FTW) )  [Done]
* Create a Web Client Example

model.js it is where we gonna add ours new remote method. In other words, you create you custom actions and routes here.

**dislike**

No Console

##Updated Aug 28
  * I found one (https://github.com/GovRight/loopback-console) but it’s still immature. We could based on this one to create a my console library  :)
  
  * We have to create  a setup db file to migrate or create data tables
