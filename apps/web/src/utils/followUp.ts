// apps/web/src/utils/followUp.ts

// imports
import type { FollowUpState } from "@job-tracker/shared-types";

// calculate dates
function addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

interface FollowUpCheckpoint {
    date: Date;
    due: boolean;
}

interface FollowUpStatus {
    threeDay: FollowUpCheckpoint;
    oneWeek: FollowUpCheckpoint;
    twoWeek: FollowUpCheckpoint;
}

export function followUp(dateApplied: string): FollowUpStatus {
    const applied = new Date(dateApplied);
    const todaysDate = new Date();

    // calculated dates
    const threeDayDate = addDays(applied, 3); // 3 days from application date
    const oneWeekDate = addDays(threeDayDate, 7); // 1 week from 3 day follow up
    const twoWeekDate = addDays(oneWeekDate, 14); // 2 weeks from 1 week followup

    // check if due
    return {
        threeDay: { date: threeDayDate, due: todaysDate >= threeDayDate },
        oneWeek: { date: oneWeekDate, due: todaysDate >= oneWeekDate },
        twoWeek: { date: twoWeekDate, due: todaysDate >= twoWeekDate },
    };
}

// helper function for displaying if due
export function followUpLabel(state: FollowUpState, due: boolean): string {
    if (state === "DONE") {
        return "✓ Done";
    } else if (state === "NOT_APPLICABLE") {
        return "N/A";
    } else if (due) {
        return "Due";
    } else {
        return "Not yet";
    }
}