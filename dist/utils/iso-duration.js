export function parseIsoDurationToSeconds(value) {
    const match = value.match(
        /^P(?:(?<days>\d+(?:\.\d+)?)D)?(?:T(?:(?<hours>\d+(?:\.\d+)?)H)?(?:(?<minutes>\d+(?:\.\d+)?)M)?(?:(?<seconds>\d+(?:\.\d+)?)S)?)?$/
    );
    if (!match?.groups) {
        throw new Error(`Unsupported ISO-8601 duration: ${value}`);
    }
    const days = Number(match.groups.days ?? 0);
    const hours = Number(match.groups.hours ?? 0);
    const minutes = Number(match.groups.minutes ?? 0);
    const seconds = Number(match.groups.seconds ?? 0);
    return days * 86400 + hours * 3600 + minutes * 60 + seconds;
}
//# sourceMappingURL=iso-duration.js.map
