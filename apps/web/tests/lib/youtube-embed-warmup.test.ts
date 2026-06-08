import { describe, expect, it } from 'vitest';

import { getEmbeddabilityWarmupVideoIds } from '@/lib/youtube-embed-warmup';

describe('getEmbeddabilityWarmupVideoIds', () => {
    it('returns unique valid YouTube ids up to the warmup limit', () => {
        expect(
            getEmbeddabilityWarmupVideoIds([
                { id: 'dQw4w9WgXcQ' },
                { id: 'not-a-youtube-id' },
                { id: '9bZkp7q19f0' },
                { id: 'dQw4w9WgXcQ' },
                { id: 'kJQP7kiw5Fk' },
            ]),
        ).toEqual(['dQw4w9WgXcQ', '9bZkp7q19f0', 'kJQP7kiw5Fk']);
    });

    it('limits warmup to the first few videos', () => {
        expect(
            getEmbeddabilityWarmupVideoIds(
                [
                    { id: 'dQw4w9WgXcQ' },
                    { id: '9bZkp7q19f0' },
                    { id: 'kJQP7kiw5Fk' },
                    { id: 'M7lc1UVf-VE' },
                    { id: 'fJ9rUzIMcZQ' },
                ],
                3,
            ),
        ).toEqual(['dQw4w9WgXcQ', '9bZkp7q19f0', 'kJQP7kiw5Fk']);
    });
});
