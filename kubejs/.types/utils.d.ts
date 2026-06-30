type OverloadedParameters<T extends (...args: any[]) => any> = T extends {
    (...args: infer P1): any;
    (...args: infer P2): any;
    (...args: infer P3): any;
    (...args: infer P4): any;
    (...args: infer P5): any;
}
    ? P1 | P2 | P3 | P4 | P5
    : T extends {
            (...args: infer P1): any;
            (...args: infer P2): any;
            (...args: infer P3): any;
            (...args: infer P4): any;
        }
      ? P1 | P2 | P3 | P4
      : T extends { (...args: infer P1): any; (...args: infer P2): any; (...args: infer P3): any }
        ? P1 | P2 | P3
        : T extends { (...args: infer P1): any; (...args: infer P2): any }
          ? P1 | P2
          : T extends { (...args: infer P1): any }
            ? P1
            : never;
