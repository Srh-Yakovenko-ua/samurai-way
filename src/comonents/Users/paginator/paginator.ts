export const paginator = (totalUsersCount: number, pageSize: number, currentPage: number) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const curP = currentPage;
    const curPF = ((curP - 2) < 0) ? 0 : curP - 2;
    const curPL = curP + 2;

    return pages.slice(curPF, curPL)
}