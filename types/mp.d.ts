
declare namespace mp{
    interface ShareAppMessage {
        /**
         * 转发标题
         * @default 当前小程序名称
         */
        title?: string;

        /**
         * 转发路径	当前页面 path ，必须是以 / 开头的完整路径
         */
        path: string;
    }

    /**
 * 小程序的生命周期函数，声明
 */
    interface PageLifecycle {
        /**
         * 生命周期函数--监听页面加载
         * 一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
         * options 其他页面打开当前页面所调用的 query 参数
         */
        onLoad?(options?:object):void;

        /**
         * 生命周期函数--监听页面初次渲染完成
         * 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
         * 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期
         */
        onReady?():void;

        /**
         * 生命周期函数--监听页面显示
         * 每次打开页面都会调用一次。
         */
        onShow?():void;

        /**
         * 生命周期函数--监听页面隐藏
         * 当navigateTo或底部tab切换时调用。
         */
        onHide?():void;

        /**
         * 生命周期函数--监听页面卸载
         * 当redirectTo或navigateBack的时候调用。
         */
        onUnload?():void;

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         *
         * 监听用户下拉刷新事件。
         * 需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
         * 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
         */
        onPullDownRefresh?():void;

        /**
         *
         * 页面上拉触底事件的处理函数
         *
         * 监听用户上拉触底事件。
         */
        onReachBottom?():void;

        /**
         *
         * 用户点击右上角转发
         * 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
         * 用户点击转发按钮的时候会调用
         * 此事件需要 return 一个 Object，用于自定义转发内容
         */
        onShareAppMessage?():ShareAppMessage;

        /**
         * 页面滚动触发事件的处理函数
         *
         * 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
         * 在触发距离内滑动期间，本事件只会被触发一次。
         *
         * scrollTop	Number	页面在垂直方向已滚动的距离（单位px）
         */
        onPageScroll?(res: {scrollTop: number}):void;

        /**
         * 当前是 tab 页时，点击 tab 时触发
         */
        onTabItemTap?():void;
    }

    /**
 * 小程序 App 生命周期
 *
 * 前台、后台定义： 当用户点击左上角关闭，或者按了设备 Home 键离开微信，
 * 小程序并没有直接销毁，而是进入了后台；当再次进入微信或再次打开小程序，又会从后台进入前台。
 * 需要注意的是：只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。
 *
 */

    /**
     * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
     */
    interface ReferrerInfo {
        /**
         * 来源小程序或公众号或App的 appId，详见下方说明
         */
        appid: string;

        /**
         * 来源小程序传过来的数据，scene=1037或1038时支持
         */
        extraData: object;
    }

    interface AppLaunchOptions {
        /**
         * 打开小程序的路径
         */
        path: string;
        /**
         * 打开小程序的query
         */
        query: object;

        /**
         * 打开小程序的场景值
         */
        scene: number;

        /**
         * shareTicket，详见 获取更多转发信息
         */
        shareTicket: string;

        /**
         * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
         */
        referrerInfo: ReferrerInfo;
    }

    interface AppLifecycleEx {
        /**
         * 生命周期函数--监听小程序初始化
         * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
         */
        onLaunch?(options: AppLaunchOptions): void;

        /**
         * 生命周期函数--监听小程序显示
         * 当小程序启动，或从后台进入前台显示，会触发 onShow
         */
        onShow?(options: AppLaunchOptions): void;

        /**
         * 生命周期函数--监听小程序隐藏
         * 当小程序从前台进入后台，会触发 onHide
         */
        onHide?():void;

        /**
         * 错误监听函数	当小程序发生脚本错误，或者 api 调用失败时，
         * 会触发 onError 并带上错误信息
         */
        onError?(msg?: any): void;

        /**
         * 页面不存在监听函数	当小程序出现要打开的页面不存在的情况，
         * 会带上页面信息回调该函数，详见下文
         */
        onPageNotFound?(res?: any):void;
    }


}



