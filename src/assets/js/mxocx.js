
function LoadMxDrawX(dwgfile,cabpath,msipath,chrompath) {

    var s, classid, Sys = {}, ua = navigator.userAgent.toLowerCase();
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/trident\/([\d.]+)/)) ? Sys.ie9 = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0,
    classid = "74A777F8-7A8F-4e7c-AF47-7074828086E2",

    Sys.ie || Sys.ie9 ? (document.write("<!-- ���������༭״̬��ActiveX�ؼ���JS�ű�-->   "),
    document.write("<!-- ��Ϊ΢���ActiveX�»��ƣ���Ҫһ���ⲿ�����js-->   "),
    document.write('<object id="MxDrawXCtrl" classid="clsid:' + classid + '" '),
	//document.write('width="85%" height="85%" align="left">   '),
    document.write('codebase="' + cabpath + '" width="90%" height="90%" align="left">   '),
    document.write('<param name="_Version" value="65536">  '),
    document.write('<param name="_ExtentX" value="24262">  '),
    document.write('<param name="_ExtentY" value="16219">  '),
    document.write('<param name="_StockProps" value="0">'),
    document.write('<param name="DwgFilePath" value="' + dwgfile + '" > '),
    document.write('<param name="IsRuningAtIE" value="1">'),
    document.write('<param name="EnablePrintCmd" value="1">  '),
    document.write('<param name="ShowCommandWindow" value="1">   '),
    document.write('<param name="ShowToolBars" value="1">  '),
    document.write('<param name="ShowModelBar" value="1">'),
    document.write('<param name="Iniset" value="">  '),
    document.write('<param name="ToolBarFiles" value="">'),
    document.write('<param name="ShowMenuBar" value="1">'),
    document.write('<param name="EnableUndo" value="1">'),
    document.write('<param name="ShowPropertyWindow" value="1">'),
    document.write('<SPAN STYLE="color:red">����װ���ĵ��ؼ���ʹ��IE����QQ��360���������ģʽ�����ڼ���������ѡ���м��������İ�ȫ���á�����<a href=' + msipath + '>��װ�ؼ�</a></SPAN>'),
    document.write('</object>')) :

    Sys.chrome ? (document.write('<object id="MxDrawXCtrl" clsid="{' + classid + '}" '),
    document.write('type="application/mxdraw-activex" width="90%" height="90%" align="left" '),
    document.write('<param name="_Version" value="65536">  '),
    document.write('<param name="_ExtentX" value="24262">  '),
    document.write('<param name="_ExtentY" value="16219">  '),
    document.write('<param name="_StockProps" value="0">'),
    document.write('<param name="DwgFilePath" value="' + dwgfile + '" > '),
    document.write('<param name="IsRuningAtIE" value="1">'),
    document.write('<param name="EnablePrintCmd" value="1">  '),
    document.write('<param name="ShowCommandWindow" value="1">   '),
    document.write('<param name="ShowToolBars" value="1">  '),
    document.write('<param name="ShowModelBar" value="1">'),
    document.write('<param name="Iniset" value="CHROME=Y">  '),
    document.write('<param name="ToolBarFiles" value="">'),
    document.write('<param name="ShowMenuBar" value="1">'),
    document.write('<param name="EnableUndo" value="1">'),
    document.write('<param name="ShowPropertyWindow" value="1">'),
    document.write('<param name="Event_ImplementCommandEvent" value="DoCommandEventFunc">'),
    document.write('<SPAN STYLE="color:red">����װ���ĵ��ؼ�,�ȸ������ʹ��,����MxChrome��װ�������أ���װ�������� Chrome��ҵ�� ��ݷ�ʽ����������<a href=' + chrompath + '>��װ�ؼ�</a></SPAN>'),
    document.write('</object>')) :

    Sys.firefox ? (document.write("<!-- ��Ҫ��װieTab�������ʹ��-->   "),
    document.write("<!-- �Ҽ������˵������ʹ��ieTab���> -->  "),
   
    document.write('<div class="no_title">  ����װ���ĵ��ؼ���1.���ڰ�װieTab�����2.Ȼ������<a href=' + msipath + '>��װ�ؼ�</a>, 3.Ȼ���Ҽ������˵������ʹ��ieTab��� </div> ')

    ) :
    Sys.opera ? alert("sorry,ntko ��ʱ��֧��opera!") :
    Sys.safari && alert("sorry,ntko ��ʱ��֧��safari!");
}


function isFireFox()
{
    var s, classid, Sys = {}, ua = navigator.userAgent.toLowerCase();
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/trident\/([\d.]+)/)) ? Sys.ie9 = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    return  Sys.firefox;

}