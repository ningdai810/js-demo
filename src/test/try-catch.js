try {
    const async = 1;
    throw new Error('error');
} catch (e) {
    console.log(e);
} finally {
    // console.log(a);
}
