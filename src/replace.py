import os


def modifyFile(_f):
    _new_f = _f.replace(' - 副本.js', '.ts')
    os.rename(_f, _new_f)


def getFile(_d):
    dirs = os.listdir(_d)
    for k in dirs:
        fpth = _d + "/" + k
        f = os.path.isfile(fpth)
        if f == False:
            getFile(fpth)
        else:
            i = k.rfind(".")
            s = k[i:len(k)]
            if( s == ".js"):
                modifyFile(fpth)


getFile(".")