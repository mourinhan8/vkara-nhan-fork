import { isValidYoutubeVideoId } from '@vkara/youtube';

const DEFAULT_EMBEDDABILITY_WARMUP_LIMIT = 8;

export function getEmbeddabilityWarmupVideoIds(
    videos: Array<{ id: string }>,
    limit = DEFAULT_EMBEDDABILITY_WARMUP_LIMIT,
): string[] {
    const ids: string[] = [];
    const seen = new Set<string>();

    for (const video of videos) {
        if (ids.length >= limit) {
            break;
        }

        if (!isValidYoutubeVideoId(video.id) || seen.has(video.id)) {
            continue;
        }

        seen.add(video.id);
        ids.push(video.id);
    }

    return ids;
}
