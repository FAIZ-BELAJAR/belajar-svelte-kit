import type { RequestEvent } from "@sveltejs/kit";

export function load(req: RequestEvent){
    return {
        url: req.url,
    }
}