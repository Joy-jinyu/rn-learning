### 新增依赖
+ yarn add 
+ npx pod-install ios

**问题**
```shell
 BUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 64
 ```

 **解决方案**
 是由于gradle版本跟java版本不一致导致的，修改版本即可


 adb devices
