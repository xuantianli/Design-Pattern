/**
 * 单例模式
 * 确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例。
 * 应用场景：
    避免产生多个对象消耗过多的资源（特别是一个对象需要频繁的创建和销毁时）
    提供一个全局访问点，常常被用来管理系统中共享的资源(作为一个Manager)。
 */
namespace SingletonPattern {
    /**
     * 静态单例(饿汉模式)
     */

    export class Singleton1 {

        /**定义为static，可以保证变量为线程安全的，即每个线程一个实例 */
        public static Instance: Singleton1 = new Singleton1();

        private constructor() { };

        public static GetInstance() {
            return this.Instance;
        }
    }

    /**
     * 懒汉模式
     */
    export class Singleton2 {

        /**定义为static，可以保证变量为线程安全的，即每个线程一个实例 */
        public static Instance: Singleton1;

        private constructor() { };

        public static GetInstance() {
            return this.Instance ?? (this.Instance = new Singleton2());
        }
    }

    /**
     * 泛型实现
     */
    export class GenericSingleton<T> {

        private static Instance: any = null;

        public static GetInstance<T>(c: { new(): T }): T {

            return this.Instance ||= new c();
        }
    }

    // /**
    //  * 锁机制 确保多线程只产生一个实例 Ts无法实现
    //  */

    // export class Singleton3 {

    //     /**定义为static，可以保证变量为线程安全的，即每个线程一个实例 */
    //     public static Instance: Singleton3;
    //     /**单列锁 */
    //     private static readonly Locker: Object = new Object();

    //     private constructor() { };

    //     public static GetInstance() {
    //         if (!this.Instance) {
    //             Lock(this.Locker) {
    //                 if (!this.Instance) {
    //                     this.Instance = new Singleton3();
    //                 }
    //             }
    //         }
    //         return this.Instance;
    //     }
    // }


}