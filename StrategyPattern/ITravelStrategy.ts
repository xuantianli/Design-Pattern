/**策略模式*/
/**定义一组算法，将每个算法都封装起来并且使他们之间可以互换*/
/**本实例以旅游方案作为参考*/
/**
 * 旅游策略类
 */
/**定义旅游位置 */
type _TRAVRENAME = string | number | boolean;

export abstract class ITravelStrategy {
    /**旅游目的地*/
    private mPlanName: _TRAVRENAME;
    /**旅游预算*/
    private mBudget: number = NaN;

    public set planName(planName: _TRAVRENAME) { this.mPlanName = planName; }
    public get planName() { return this.mPlanName; }

    public set Budget(value: number) { this.mBudget = value; }
    public get Budget() { return this.mBudget; }

    /**旅游计划*/
    protected TravePlan(): void { }
}

export class ChongQingTravel extends ITravelStrategy {
    /**旅游预算标准*/
    private readonly mTravelBudget: number = 2000;

    public ChongQingTravel() {
        this.planName = "去重庆了";
    }

    public TravePlan() {
        console.log(`计划名称：${this.planName}：预算 ${this.Budget}`);

        const _vehicle: string = this.Budget >= this.mTravelBudget ? "选择高铁出行！" : "选择大巴出行!";

        console.log(_vehicle);
    }
}