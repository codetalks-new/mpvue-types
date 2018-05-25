declare namespace mp {
  /**
   * 添加 Vue 生命周期函数声明，方便以类风格编写 Component 添加 life cycle 函数.
   * 但是不能使用 module augmentation 的方式来增加,
   * 因为这会跟 VueCombinedInstance 声明的即 Component 声明的方法冲突。
   */
  interface VueLifecycle {
    /**
     * Called synchronously immediately after the instance has been initialized,
     * before data observation and event/watcher setup.
     */
    beforeCreate?(): void;

    /**
     * Called synchronously after the instance is created.
     * At this stage, the instance has finished processing the options which
     * means the following have been set up: data observation, computed
     * properties, methods, watch/event callbacks.
     * However, the mounting phase has not been started, and the $el property
     * will not be available yet.
     */
    created?(): void;

    /**
     * Called right before the mounting begins: the render function is about to
     * be called for the first time.
     *
     * This hook is not called during server-side rendering.
     */
    beforeMount?(): void;

    /**
     * Called after the instance has been mounted, where el is replaced by the
     * newly created vm.$el. If the root instance is mounted to an in-document
     * element, vm.$el will also be in-document when mounted is called.
     *
     * Note that mounted does not guarantee that all child components have also
     * been mounted. If you want to wait until the entire view has been rendered,
     *  you can use vm.$nextTick inside of mounted:
      ```js
      mounted: function () {
        this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been rendered
        })
      }
      ```
  
    This hook is not called during server-side rendering.
     */
    mounted?(): void;

    /**
     * Called when data changes, before the DOM is patched. This is a good place
     * to access the existing DOM before an update, e.g. to remove manually added
     * event listeners.
     *
     * This hook is not called during server-side rendering, because only the
     * initial render is performed server-side.
     */
    beforeUpdate?(): void;

    /**
     * Called after a data change causes the virtual DOM to be re-rendered and
     * patched.
     * The component’s DOM will have been updated when this hook is called, so
     * you can perform DOM-dependent operations here. However, in most cases you
     * should avoid changing state inside the hook. To react to state changes,
     * it’s usually better to use a computed property or watcher instead.
     *
     * Note that updated does not guarantee that all child components have also
     * been re-rendered. If you want to wait until the entire view has been
     * re-rendered, you can use vm.$nextTick inside of updated:
     *
     * ```js
        updated: function () {
          this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been re-rendered
          })
        }
      ```
      This hook is not called during server-side rendering.
     *
     */
    updated?(): void;

    /**
     * Called when a kept-alive component is activated.
     *
     * This hook is not called during server-side rendering.
     */
    activated?(): void;

    /**
     * Called when a kept-alive component is deactivated.
     *
     * This hook is not called during server-side rendering.
     */
    deactivated?(): void;

    /**
     * Called right before a Vue instance is destroyed. At this stage the
     * instance is still fully functional.
     *
     * This hook is not called during server-side rendering.
     */
    beforeDestory?(): void;

    /**
     *
     * Called after a Vue instance has been destroyed. When this hook is called,
     * all directives of the Vue instance have been unbound, all event listeners
     * have been removed, and all child Vue instances have also been destroyed.
     *
     * This hook is not called during server-side rendering.
     */
    destroyed?(): void;
  }
}
