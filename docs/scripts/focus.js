// DIAPH
// 162 3.190196078 8
//  51 1           2.507682852
// 51 / 2.507682852 = 20.337499999
const APERTURES = [0.5, 0.7, 1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32, 45, 64, 90, 128, 180, 256, 360, 512];
const INCH = 25.4;
function getCircleOfConfusion(sensor, distance) {
    // !!! Distance c'est pas la distance du sujet mais la distance à laquelle on regarde la photo, donc c'est la distance de visualisation. Donc si on regarde une photo à 1m, on met 1000mm.
    return getSensorDiagonal(sensor) / distance;
}
function getMaximumAperture(cameraLens) {
    return cameraLens.focal / cameraLens.diameter;
}
function getPixelSize(dpi) {
    return INCH / dpi;
}
function getSensorDiagonal(sensor) {
    return Math.hypot(sensor.width, sensor.height);
}
function focus(cameraLens, distance) {
    //const ouvertureMultipliéParC01 = N * c;
    //const c = ouvertureCercleDeConQqch(lens.focal, lens.size);
    //const c = circleOfConfusion(aperture(lens.focal, lens.size));
    //console.log(c);
    const f2 = Math.pow(cameraLens.focal, 2);
    const df2 = distance * f2;
    const dl = distance - cameraLens.focal;
    //const cdl = getCircleOfConfusion() * dl;
    const dlcoc = dl * 0.1;
    const near = df2 / (f2 + dlcoc);
    const far = df2 / (f2 - dlcoc);
    return { depthOfField: { near, far } };
}
export { APERTURES, INCH, getCircleOfConfusion, getMaximumAperture, getPixelSize, getSensorDiagonal, focus };
