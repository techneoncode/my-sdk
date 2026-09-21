export interface EvaluationRncpSkillItem {
    certificativeValidation: boolean;
    formativeValidation: boolean;
    title: string;
    validationLevel: unknown;
}

export interface EvaluationRncpBlockItem {
    dueTekYear: number;
    dueYearLabel: string;
    isDue: boolean;
    isOverdue: boolean;
    optionGroup: number | null;
    requirement: string;
    skills: EvaluationRncpSkillItem[];
    title: string;
    validationStatus: string;
}

/**
 * Response of `GET evaluations/rncp/me`.
 */
export interface EvaluationRncpResponse {
    alerts: number;
    blocks: EvaluationRncpBlockItem[];
    certificativeBlockThreshold: number;
    city: string;
    login: string;
    promo: number;
    referentialId: number;
    validationStatus: string;
}
