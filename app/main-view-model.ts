import { Observable } from '@nativescript/core';

export class HelloWorldModel extends Observable {
  private _totalCount: number = 45890;
  private _currentCount: number = 45890;
  private _progress: number = 75;
  private _workingDays: number = 22;
  private _moreCount: number = 22;
  private _percentage: number = 22.56;
  private _needFor100: number = 6544;
  private _dailyPercentage: number = 67.56;

  constructor() {
    super();
  }

  get totalCount(): number {
    return this._totalCount;
  }

  get currentCount(): number {
    return this._currentCount;
  }

  get progress(): number {
    return this._progress;
  }

  get workingDays(): number {
    return this._workingDays;
  }

  get moreCount(): number {
    return this._moreCount;
  }

  get percentage(): number {
    return this._percentage;
  }

  get needFor100(): number {
    return this._needFor100;
  }

  get dailyPercentage(): number {
    return this._dailyPercentage;
  }

  onAddNewClip() {
    console.log('Adding new clip...');
  }

  onTabTap(args) {
    const index = args.object.col;
    console.log(`Tapped tab ${index + 1}`);
  }
}