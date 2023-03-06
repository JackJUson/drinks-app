import { AppComponent } from './app.component';
import { describe, expect, it, beforeEach, jest } from '@jest/globals';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have a title drinks-app', () => {
    expect(fixture.title).toEqual('drinks-app');
  });
});
