export async function getCommits(repo, path) {
    const url = `https://api.github.com/repos/${repo}/commits?path=${path}`;

    const res = await fetch(url);

    if (!res.ok) return [];

    const data = await res.json();

    return data.map(c => ({
        autor: c.commit.author.name,
        data: c.commit.author.date,
        mensagem: c.commit.message,
        sha: c.sha
    }));
}
