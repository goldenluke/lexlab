export function classifyCommit(msg) {
    msg = msg.toLowerCase();

    if (msg.includes('fix')) return 'correção técnica';
    if (msg.includes('feat')) return 'adição normativa';
    if (msg.includes('refactor')) return 'reorganização';
    if (msg.includes('remove')) return 'revogação';

    return 'alteração geral';
}

export function buildTimeline(commits) {
    return commits.map(c => ({
        ...c,
        tipo: classifyCommit(c.mensagem)
    }));
}
