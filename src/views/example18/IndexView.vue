<script setup lang="ts"></script>
<template>
  <div>
    <h1>Decorators</h1>
    <div>
      <p>
        装饰器(Decorators)，可以拦截`类`中方法的执行，获取改变参数/返回结果/方法调用，是前端TS的AOP切面。
        <br />
        示例通过装饰器拦截业务方法，在装饰器中判断store中是否存在数据，存在则直接返回响应式数据，不实际调用业务方法；不存在则实际调用业务方法，将结果置于store，返回响应式数据。
        <br />
        当多次加载时，仅调用一次业务方法，这种方式可极大简化业务代码。
        <br />
        控制台打印输出类型。
      </p>
    </div>
    <suspense>
      <RouterView />
    </suspense>
  </div>
</template>
