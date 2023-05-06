### 新增依赖
+ yarn add
+ android 
    - cd android 
    - ./gradlew app:installDebug -PreactNativeDevServerPort=808
+ ios 
    - npx pod-install ios

**问题**
```shell
 BUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 64
 ```

 **解决方案**
 是由于gradle版本跟java版本不一致导致的，修改版本即可


 adb devices
 brew install android-platform-tools

 ### 调试技巧

 ```markdown
* Android 模拟器开启 Command* + M
* iOS模拟器 Command* + D
* 真机可以通过摇动手机开启
```
