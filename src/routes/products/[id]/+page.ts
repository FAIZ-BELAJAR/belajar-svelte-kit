import type { RequestEvent } from "@sveltejs/kit";

export function load(req: RequestEvent){
    return {
        id: req.params.id??0
    }
}