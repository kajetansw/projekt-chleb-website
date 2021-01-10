import formatMinutes from './index';

describe('formatMinutes', () => {
  it('should format minutes under 1h', () => {
    expect(formatMinutes(50)).toEqual('50min');
  });

  it("should format n multiplications of 60min as 'nh'", () => {
    expect(formatMinutes(60)).toEqual('1h');
    expect(formatMinutes(120)).toEqual('2h');
    expect(formatMinutes(180)).toEqual('3h');
  });

  it('should format minutes that are not multiplications of 60min', () => {
    expect(formatMinutes(200)).toEqual('3h 20min');
    expect(formatMinutes(310)).toEqual('5h 10min');
  });
});
