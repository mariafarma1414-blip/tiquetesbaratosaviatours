@echo off
chcp 65001 >nul
echo ============================================
echo    Reorganizacion del Proyecto Avianca
echo ============================================
echo.

echo [1/8] Creando estructura de carpetas...
mkdir assets\images\logos 2>nul
mkdir assets\images\icons 2>nul
mkdir assets\images\banners 2>nul
mkdir assets\images\photos 2>nul
mkdir assets\images\loaders 2>nul
mkdir assets\plugins\confirmDate 2>nul
mkdir assets\plugins\monthSelect 2>nul
mkdir pages 2>nul
mkdir otros 2>nul

echo [2/8] Moviendo logos...
move /Y assets\logos\avianca_full.svg assets\images\logos\ 2>nul
move /Y assets\logos\avianca_negative.svg assets\images\logos\ 2>nul
move /Y assets\svg\logoavianca.svg assets\images\logos\ 2>nul

echo [3/8] Moviendo iconos...
move /Y bx-calendar.svg assets\images\icons\ 2>nul
move /Y bxs-user-plus.svg assets\images\icons\ 2>nul
move /Y assets\svg\down_arrow.png assets\images\icons\ 2>nul
move /Y flecha-atras.png assets\images\icons\ 2>nul
move /Y assets\svg\flecha-atrass.png assets\images\icons\ 2>nul
move /Y landing_icon.png assets\images\icons\ 2>nul
move /Y takeoff_icon.png assets\images\icons\ 2>nul
move /Y assets\svg\mas.png assets\images\icons\ 2>nul
move /Y assets\svg\menos.png assets\images\icons\ 2>nul
move /Y assets\svg\millas.png assets\images\icons\ 2>nul
move /Y assets\svg\simbolo-x.png assets\images\icons\ 2>nul
move /Y assets\svg\i-mail.png assets\images\icons\ 2>nul
move /Y dolar.png assets\images\icons\ 2>nul
move /Y assets\svg\avionbajando.png assets\images\icons\ 2>nul
move /Y assets\svg\avionsubiendo.png assets\images\icons\ 2>nul

echo [4/8] Moviendo banners...
move /Y assets\svg\a_icon_banner.png assets\images\banners\ 2>nul
move /Y assets\svg\bucara__banner.webp assets\images\banners\ 2>nul
move /Y assets\svg\ipiales__banner.webp assets\images\banners\ 2>nul
move /Y assets\svg\medellin__banner.webp assets\images\banners\ 2>nul
move /Y assets\svg\header_bg_blue.png assets\images\banners\ 2>nul
move /Y assets\svg\es-home-l-low-season-playa.jpg assets\images\banners\ 2>nul
move /Y assets\svg\es-home-s-low-season-playa_v2.jpg assets\images\banners\ 2>nul
move /Y es-s-banner-menu-tulum.png assets\images\banners\ 2>nul

echo [5/8] Moviendo fotos...
move /Y assets\svg\photo.jpg assets\images\photos\ 2>nul
move /Y assets\svg\photo1.png assets\images\photos\ 2>nul
move /Y assets\svg\photo3.jpg assets\images\photos\ 2>nul
move /Y mob-picture-loungejpg.jpg assets\images\photos\ 2>nul
move /Y haz-check-in-online-antes-vuelo.png assets\images\photos\ 2>nul
move /Y visita-nuestro-centro-de-ayuda-pregunta.jpg assets\images\photos\ 2>nul

echo [6/8] Moviendo animaciones...
move /Y assets\svg\plane-loader.gif assets\images\loaders\ 2>nul

echo [7/8] Moviendo plugins y paginas...
move /Y dist\plugins\confirmDate\confirmDate.html assets\plugins\confirmDate\ 2>nul
move /Y dist\plugins\monthSelect\style.html assets\plugins\monthSelect\ 2>nul
move /Y img\calendario.html pages\ 2>nul
move /Y img\pasajeros.html pages\ 2>nul
move /Y dist\ie.html pages\ 2>nul

echo [8/8] Moviendo otros archivos...
move /Y assets\svg\Powered_by.png otros\ 2>nul
move /Y assets\svg\social_media_icons.png otros\ 2>nul
move /Y web.png otros\ 2>nul
move /Y what.png otros\ 2>nul

echo.
echo Renombrando archivo principal...
if exist index7778.html (
    move /Y index7778.html index.html 2>nul
)

if exist _.html (
    echo ADVERTENCIA: Encontrado archivo _.html - renombrandolo a _backup.html
    move /Y _.html _backup.html 2>nul
)

echo.
echo Limpiando carpetas vacias...
rmdir assets\logos 2>nul
rmdir assets\svg 2>nul
rmdir dist\plugins\confirmDate 2>nul
rmdir dist\plugins\monthSelect 2>nul
rmdir dist\plugins 2>nul
rmdir dist 2>nul
rmdir img 2>nul

echo.
echo ============================================
echo    REORGANIZACION COMPLETADA!
echo ============================================
echo.
echo Estructura final:
echo    - index.html
echo    - assets/
echo        - css/
echo        - js/
echo        - images/
echo            - logos/
echo            - icons/
echo            - banners/
echo            - photos/
echo            - loaders/
echo        - plugins/
echo    - pages/
echo    - otros/
echo.
echo IMPORTANTE: Ahora debes actualizar las rutas en tus archivos HTML, CSS y JS
echo.
pause