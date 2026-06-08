import { describe, expect, it } from 'vitest';

import { isExperimentsEnabled, isExperimentsEnabledOnWeb } from '../src/experiments';

describe('experiments env helpers', () => {
    it('server flag enables experiments on the server', () => {
        expect(isExperimentsEnabled({ VKARA_EXPERIMENTS: 'true' })).toBe(true);
    });

    it('web client uses only the public experiments flag', () => {
        expect(
            isExperimentsEnabledOnWeb({
                VKARA_EXPERIMENTS: 'true',
                NEXT_PUBLIC_VKARA_EXPERIMENTS: undefined,
            }),
        ).toBe(false);
        expect(
            isExperimentsEnabledOnWeb({
                VKARA_EXPERIMENTS: 'false',
                NEXT_PUBLIC_VKARA_EXPERIMENTS: 'true',
            }),
        ).toBe(true);
    });
});
