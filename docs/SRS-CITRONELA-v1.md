# SRS — Citronela Platform

## Software Requirements Specification

**Versión:** 1.0
**Fecha:** 2026-04-28
**Basado en:** IEEE/ISO/IEC 29148:2018
**Origen de requerimientos:** Relevamiento funcional de Super M (MVP vibecoding) + visión de producto Citronela
**Autor:** Jesus Fleitas / Antigravity
**Estado:** Draft — pendiente validación con Santiago (stakeholder)

---

## 1. Introducción

### 1.1 Propósito

Este documento especifica los requerimientos funcionales y no funcionales de **Citronela**, una plataforma integral de gestión para cultivo, e-commerce y comunidad orientada al mercado cannábico hispanohablante.

Los requerimientos fueron extraídos del MVP funcional "Super M" (desarrollado por el socio de Santiago mediante vibecoding) y formalizados como especificación de ingeniería para su implementación profesional en Citronela.

### 1.2 Alcance del Producto

**Citronela** es una plataforma web que provee:

- Tienda online integrada con Mercado Libre
- Herramientas de laboratorio para cultivadores (calculadoras técnicas)
- Sistema de seguimiento de cultivo (diario)
- Diagnóstico de plantas asistido por IA (visión + texto)
- Comunidad con foro, votación y moderación
- Biblioteca de conocimiento curada y colaborativa
- Recetarios de nutrición por marca

**Fuera de alcance (v1):** App mobile nativa, procesamiento de pagos directo, marketplace entre usuarios.

### 1.3 Definiciones y Acrónimos

| Término | Definición |
|---------|-----------|
| VPD | Vapor Pressure Deficit — diferencial de presión de vapor, métrica clave en cultivo indoor |
| EC | Electrical Conductivity — conductividad eléctrica del agua de riego (mS/cm o PPM) |
| pH | Potencial de hidrógeno — acidez/alcalinidad de la solución de riego |
| N-P-K | Nitrógeno-Fósforo-Potasio — macronutrientes primarios |
| ML | Mercado Libre |
| SRS | Software Requirements Specification |
| FR | Functional Requirement (requerimiento funcional) |
| NFR | Non-Functional Requirement (requerimiento no funcional) |
| UC | Use Case (caso de uso) |
| Oráculo | Motor de diagnóstico IA para identificación de carencias/plagas |

### 1.4 Referencias

- IEEE/ISO/IEC 29148:2018 — Systems and software engineering — Life cycle processes — Requirements engineering
- Super M MVP (GitHub: superm-growlab/superm) — fuente de relevamiento funcional
- Citronela CLAUDE.md — protocolos de ingeniería del proyecto

---

## 2. Descripción General

### 2.1 Perspectiva del Producto

Citronela es un sistema standalone que reemplaza y profesionaliza el MVP Super M. Se integra con servicios externos (Mercado Libre, Google Gemini, Google Sheets) pero opera como plataforma independiente.

### 2.2 Funciones del Producto (resumen alto nivel)

| ID | Función | Descripción |
|----|---------|-------------|
| F-01 | Tienda | Catálogo de productos con categorías, reseñas y carrito |
| F-02 | Calculadora VPD | Cálculo y visualización de déficit de presión de vapor |
| F-03 | Calculadora de Luz | Estimación de consumo energético de equipos de cultivo |
| F-04 | Calculadora de Sustrato | Recetas de mezcla de sustrato según tipo y volumen |
| F-05 | Diagnóstico pH/EC | Análisis de calidad de agua según etapa de crecimiento |
| F-06 | Asistente de Mezcla | Cálculo de dosis de nutrientes por volumen |
| F-07 | Diario de Cultivo | Seguimiento semanal con métricas, fotos y notas |
| F-08 | Oráculo / Detector IA | Diagnóstico de carencias por texto o imagen |
| F-09 | Comunidad / Foro | Posts categorizados con votos, respuestas y notificaciones |
| F-10 | Biblioteca de Notas | Base de conocimiento curada con votación comunitaria |
| F-11 | Recetarios | Tablas de nutrición por marca con descarga |
| F-12 | Panel de Administración | Moderación de contenido generado por usuarios |
| F-13 | Bot de Inventario | Importación automática de productos desde Mercado Libre |

### 2.3 Clases de Usuario

| Clase | Descripción | Acceso |
|-------|-------------|--------|
| Visitante | Usuario no autenticado | Lectura de tienda, biblioteca y recetarios |
| Cultivador | Usuario registrado | Todo excepto administración |
| Admin | Administrador de la plataforma | Moderación, gestión de inventario, aprobación de contenido |

### 2.4 Entorno Operativo

- Plataforma web responsive (desktop + mobile)
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Backend: Next.js (stack actual de Citronela)
- Base de datos: PostgreSQL via Drizzle ORM (stack actual)
- Servicios cloud: según arquitectura definida en Citronela

### 2.5 Restricciones de Diseño

- Stack definido por Citronela: Next.js + Drizzle + PostgreSQL
- Metodología SDD obligatoria para cada feature
- Arquitectura modular por dominio (`components/features/{feature}/`)
- Zero hardcoding — datos en archivos `data.ts`
- TDD obligatorio

### 2.6 Supuestos y Dependencias

- Acceso a API de Mercado Libre (OAuth Client Credentials)
- Acceso a Google Gemini API (modelo multimodal para visión)
- Disponibilidad de Google Sheets como fuente de datos de catálogo (temporal, migrar a DB propia)
- Santiago valida y prioriza requerimientos antes de implementación

---

## 3. Requerimientos de Interfaces Externas

### 3.1 Interfaces de Usuario

| UI | Descripción |
|----|-------------|
| UI-01 | Navegación principal con tabs: Tienda, Laboratorio, Biblioteca, Comunidad, Carrito |
| UI-02 | Sub-navegación en Laboratorio: Calculadoras, Seguimiento, Recetarios |
| UI-03 | Sistema de modales para detalle de producto, reportes, formularios |
| UI-04 | Sistema de notificaciones toast (éxito, error, info) con auto-dismiss 4s |
| UI-05 | Visor de imágenes con zoom y pan |
| UI-06 | Diseño responsive mobile-first |

### 3.2 Interfaces de Software (APIs externas)

| API | Uso | Autenticación |
|-----|-----|---------------|
| Mercado Libre Items API | Obtener datos de productos por ID/URL | OAuth 2.0 Client Credentials |
| Google Gemini 1.5 Flash | Diagnóstico de plantas (texto + imagen) | API Key |
| Google Custom Search | Búsqueda de imágenes de síntomas | API Key + Search Engine ID |
| Google Sheets (TSV export) | Catálogo de productos, notas, recetarios | Público (read-only) |

### 3.3 Interfaces de Comunicación

| Interfaz | Protocolo | Descripción |
|----------|-----------|-------------|
| COM-01 | HTTPS | Toda comunicación cliente-servidor |
| COM-02 | WebSocket / SSE | Actualizaciones en tiempo real (comunidad, notificaciones) |
| COM-03 | REST | Comunicación con APIs externas |

---

## 4. Requerimientos Funcionales

### 4.1 Tienda (F-01)

**Prioridad:** Must Have

#### FR-T001: Catálogo de productos por categoría

El sistema shall mostrar un grid de productos organizados por categorías.

**Categorías:**
- Carpas / Tents
- Iluminación / Lighting
- Nutrientes / Nutrients
- Sustratos / Substrates
- Clima y Control
- Hidroponía
- Semillas / Seeds

**Inputs:** Selección de categoría
**Output:** Grid filtrado de tarjetas de producto (imagen, título, rating promedio, precio)

#### FR-T002: Detalle de producto

El sistema shall mostrar una vista completa de producto al seleccionarlo.

**Muestra:**
- Galería de imágenes con navegación y zoom
- Título y descripción corta
- Especificaciones técnicas (atributos)
- Precio en moneda local
- Rating promedio con distribución de estrellas
- Botón "Agregar a selección" (carrito)
- Botón "Ver en Mercado Libre" (link externo)

#### FR-T003: Sistema de reseñas

El sistema shall permitir a usuarios autenticados dejar reseñas de productos.

**Inputs:**
- Rating de 1 a 5 estrellas
- Texto de comentario
- Fotos (múltiples, opcionales)

**Outputs:**
- Reseña publicada con nombre de usuario, fecha, rating, texto, fotos
- Contador de upvotes/downvotes
- Actualización del rating promedio del producto

**Reglas de negocio:**
- Login requerido para publicar
- Un voto por usuario por reseña (toggle: upvote cancela downvote y viceversa)
- Solo autor o admin pueden editar/eliminar
- Admin recibe notificación de nueva reseña

#### FR-T004: Carrito de compras

El sistema shall permitir acumular productos para compra.

**Funcionalidad:**
- Agregar producto al carrito
- Eliminar producto individual
- Vaciar carrito completo
- "Abrir todos en Mercado Libre" — abre cada link de producto en una pestaña nueva
- Persistencia entre sesiones (localStorage o DB según usuario)

**Reglas de negocio:**
- El carrito NO procesa pagos directamente — redirige a Mercado Libre
- Cada producto es una entrada (sin control de cantidad en v1)

---

### 4.2 Calculadora VPD (F-02)

**Prioridad:** Must Have

#### FR-VPD001: Cálculo de VPD

El sistema shall calcular el Vapor Pressure Deficit a partir de temperatura y humedad.

**Inputs:**
- Temperatura (°C)
- Humedad relativa (%)

**Output:**
- Valor VPD en kPa
- Estado: Bajo / Óptimo / Alto
- Consejo diagnóstico (implicaciones para transpiración)

**Fórmula:** `VPD = SVP × (1 - RH/100)` donde SVP es la presión de vapor de saturación a la temperatura dada.

#### FR-VPD002: Gráfico VPD por etapa

El sistema shall renderizar un gráfico de zonas VPD codificado por colores según la semana de crecimiento.

**Inputs:**
- Semana de crecimiento (1-12)

**Output:**
- Gráfico con 6 zonas de color
- Marcador de posición actual (temp/humedad del usuario)
- Rangos ideales para la etapa actual

**Rangos por etapa:**

| Etapa | Semanas | VPD Ideal (kPa) |
|-------|---------|-----------------|
| Esqueje/Plántula | 1-2 | 0.4 — 0.8 |
| Vegetativo temprano | 3-4 | 0.8 — 1.0 |
| Vegetativo pleno | 5-6 | 0.8 — 1.1 |
| Pre-floración | 7 | 1.1 — 1.3 |
| Floración temprana | 8 | 1.1 — 1.5 |
| Floración plena | 9-10 | 1.3 — 1.6 |
| Maduración | 11-12 | 1.3 — 1.6 |

#### FR-VPD003: Guardar resultado en diario

El sistema shall permitir guardar el resultado del cálculo VPD como entrada en el diario de cultivo.

---

### 4.3 Calculadora de Luz (F-03)

**Prioridad:** Should Have

#### FR-LUZ001: Cálculo de consumo energético

El sistema shall calcular el consumo eléctrico total para equipos de cultivo.

**Inputs:**
- Potencia de luminaria (watts) — input manual o selección de lista
- Horas diarias de luz (botones rápidos: 18h, 12h)
- Duración en meses
- Equipos auxiliares opcionales (cada uno con watts y horas/día):
  - Extractor (60W default)
  - Ventilador clip (20W default)
  - Humidificador (35W default)
  - Bomba de aire (15W default)
  - Aire acondicionado (800W default)

**Output:**
- Consumo total en kWh para el período
- Desglose por equipo

**Fórmula:** `kWh = (Watts × Factor_Tecnología × Horas × Días × Meses) / 1000`

#### FR-LUZ002: Comparación de escenarios

El sistema shall permitir guardar un escenario base ("Escenario A") y compararlo contra configuraciones alternativas.

**Output:**
- Gráfico comparativo
- Diferencia en kWh (ahorro o exceso)

#### FR-LUZ003: Exportar reporte

El sistema shall permitir descargar el reporte como imagen PNG.

---

### 4.4 Calculadora de Sustrato (F-04)

**Prioridad:** Should Have

#### FR-SUS001: Receta de mezcla de sustrato

El sistema shall calcular la composición óptima de sustrato según tipo y volumen.

**Inputs:**
- Tamaño de maceta (litros) — botones rápidos: 2L, 5L, 7L, 10L, etc.
- Cantidad de macetas
- Tipo de sustrato: Standard, Auto, Bio+

**Output:**
- Porcentaje de cada componente:
  - Turba/Coco (40-50%)
  - Perlita (20-35%)
  - Humus (10-25%)
  - Vermiculita (10-15%)
  - Enmiendas (0-5%)
- Volumen total necesario por componente (litros)
- Desglose por maceta

**Reglas de negocio:**

| Tipo | Perfil | Uso |
|------|--------|-----|
| Standard | Balanceado | Fotoperiódicas |
| Auto | Máxima aireación | Autoflorecientes (crecimiento rápido) |
| Bio+ | Alta carga orgánica | Cultivo orgánico premium |

---

### 4.5 Diagnóstico pH/EC (F-05)

**Prioridad:** Must Have

#### FR-PHEC001: Análisis de calidad de agua por etapa

El sistema shall analizar pH y EC del agua de riego y proveer diagnóstico según la etapa de crecimiento.

**Inputs:**
- Semana de crecimiento (1-12)
- Valor de pH
- Valor de EC (mS/cm o PPM, con switch de unidades)
- Temperatura (opcional)
- Humedad (opcional)

**Output:**
- Estado: OK o AJUSTE NECESARIO
- Análisis de pH con advertencias de deficiencias específicas
- Análisis de EC con evaluación de estrés osmótico
- Estado de biodisponibilidad de nutrientes
- Ratio N-P-K objetivo para la etapa actual
- Codificación por color: verde (OK), púrpura (alerta)

**Rangos óptimos por etapa:**

| Etapa | pH | EC (mS/cm) | Ratio N-P-K |
|-------|----|------------|-------------|
| Plántula (sem 1-2) | 5.5 — 5.8 | 0.6 — 0.9 | 1-1-1 |
| Vegetativo (sem 3-5) | 5.8 — 6.0 | 1.0 — 1.4 | 3-1-2 |
| Pre-floración (sem 6-7) | 6.0 — 6.2 | 1.4 — 1.7 | 2-1-2 |
| Floración temprana (sem 8) | 6.2 — 6.3 | 1.6 — 2.0 | 1-2-3 |
| Floración plena (sem 9) | 6.2 — 6.3 | 1.8 — 2.2 | 1-2-3 |
| Engorde explosivo (sem 10) | 6.3 — 6.4 | 2.0 — 2.4 | 1-3-3 |
| Finish (sem 11) | 6.4 — 6.5 | 1.6 — 1.9 | 1-1-2 |
| Flush final (sem 12) | 6.0 — 6.5 | 0.0 — 0.5 | 0-0-0 |

#### FR-PHEC002: Guardar diagnóstico en diario

El sistema shall permitir guardar el resultado del análisis pH/EC como entrada en el diario de cultivo.

---

### 4.6 Asistente de Mezcla de Nutrientes (F-06)

**Prioridad:** Could Have

#### FR-MIX001: Calculadora de recetas de nutrientes

El sistema shall permitir crear recetas de solución nutritiva acumulando compuestos.

**Inputs:**
- Volumen del contenedor (litros) — botones rápidos: 10L, 20L, 50L
- Cantidad de contenedores
- Lista de productos (nombre + dosis en ml/L)

**Output:**
- Lista acumulada de compuestos
- Total de ml necesarios por compuesto
- ml por contenedor individual
- Receta total en formato ml/L

**Acciones:**
- Agregar compuesto a la mezcla
- Eliminar compuesto
- Guardar receta en diario

---

### 4.7 Diario de Cultivo (F-07)

**Prioridad:** Must Have

#### FR-DIA001: Registro semanal por planta

El sistema shall permitir registrar observaciones semanales por planta.

**Inputs por entrada:**
- Nombre de planta
- Semana (1-12, auto-incrementa)
- Etapa de crecimiento (selector)
- pH
- EC
- Temperatura (°C)
- Humedad (%)
- Fotos (múltiples)
- Observaciones (texto libre)

**Output:**
- Tabla agrupada por planta, ordenada cronológicamente
- Cada fila muestra: fecha, semana, etapa, pH, EC, temp, humedad, thumbnail de fotos, botón de reporte, notas

**Reglas de negocio:**
- Una entrada por semana por planta
- Datos privados del usuario (solo el dueño puede leer/escribir)
- Fotos comprimidas a 800px máximo

#### FR-DIA002: Reporte Oráculo desde diario

El sistema shall generar un reporte diagnóstico a partir de los datos de una semana específica.

**Output:**
- Gráfico VPD dinámico basado en temp/humedad de esa semana
- Análisis pH/EC con recomendaciones
- Estado general con indicador visual

#### FR-DIA003: Anotaciones libres

El sistema shall permitir crear notas de texto libre con fotos, independientes del tracking estructurado.

**Inputs:**
- Título
- Contenido (texto)
- Fotos (opcionales)

**Acciones:** Crear, ver, editar, eliminar.

#### FR-DIA004: Tabla de seguimiento personalizable

El sistema shall proveer una tabla tipo spreadsheet con columnas configurables.

**Columnas default:** Planta, Semana, pH, EC, Temp °C, Hum %, Riego, Observaciones

**Acciones:**
- Agregar/eliminar filas
- Agregar/eliminar columnas custom (con nombres editables)
- Switch modo impresión (claro) / modo neón (oscuro)
- Toggle layout horizontal/vertical
- Exportar como PNG

#### FR-DIA005: Visor de galería de imágenes

El sistema shall proveer un visor multimedia para fotos acumuladas en el seguimiento.

**Funcionalidad:**
- Zoom in/out
- Pan (arrastrar imagen ampliada)
- Navegación prev/next
- Vista modal lightbox

---

### 4.8 Oráculo / Detector IA (F-08)

**Prioridad:** Must Have

#### FR-ORA001: Diagnóstico por texto (consulta de síntoma)

El sistema shall diagnosticar carencias/problemas a partir de un nombre de síntoma.

**Input:** Nombre del síntoma + tags visuales

**Output (JSON estructurado):**
- Nombre del problema identificado
- Rango de pH recomendado
- Rango de EC recomendado
- Ajustes ambientales necesarios
- Protocolo de solución paso a paso
- Imagen de referencia (búsqueda automática)

**Reglas de negocio:**
- Procesado en backend (API key nunca expuesta al cliente)
- Modelo: Gemini 1.5 Flash con JSON schema mode
- Respuesta cacheada en base de datos para reutilización

#### FR-ORA002: Diagnóstico por imagen (foto de planta)

El sistema shall analizar fotos de plantas para identificar problemas.

**Input:** Foto subida por el usuario

**Output:**
- Diagnóstico con nombre del problema
- Nivel de confianza (%)
- Acción recomendada
- Mismo formato de respuesta que FR-ORA001

**Reglas de negocio:**
- Imagen comprimida a 800px antes de enviar
- Procesado vía Gemini Vision (multimodal)
- Modo test para health checks

#### FR-ORA003: Biblioteca de síntomas

El sistema shall mantener una biblioteca visual de síntomas navegable.

**Contenido base:** 20 diagnósticos pre-cargados:
- Deficiencias: Nitrógeno, Fósforo, Potasio, Calcio, Magnesio, Hierro, Boro, Azufre, Zinc, Manganeso, Cobre, Molibdeno
- Excesos: Nitrógeno
- Estrés: Quemadura de luz, Estrés térmico, Exceso de riego, Fluctuación de pH, Quemadura de nutrientes
- Plagas: Oídio, Araña roja

**Acciones:**
- Navegar galería de síntomas
- Buscar por nombre o tag
- Filtrar por múltiples criterios
- Click para ver diagnóstico completo

#### FR-ORA004: Guardar diagnóstico en diario

El sistema shall permitir guardar cualquier diagnóstico como entrada en el diario de cultivo.

---

### 4.9 Comunidad / Foro (F-09)

**Prioridad:** Must Have

#### FR-COM001: Publicar post

El sistema shall permitir a usuarios autenticados crear posts categorizados.

**Categorías:**

| ID | Nombre | Emoji | Uso |
|----|--------|-------|-----|
| general | General | 📝 | Temas varios |
| consulta | Consulta Técnica | 🧪 | Problemas de cultivo |
| sugerencia | Sugerencia | 💡 | Ideas para la plataforma |
| producto | Opinión de Producto | 🛒 | Reviews fuera de tienda |
| plaga | Alerta de Plaga | ⚠️ | Avisos críticos |
| logro | Logro / Cosecha | 🏆 | Éxitos compartidos |
| tabla | Solicitud de Tabla | 📊 | Pedir datos de cultivo |

**Inputs:**
- Categoría (selector con colores)
- Texto (obligatorio)
- Fotos (múltiples, opcionales, comprimidas)

**Reglas de negocio:**
- Login obligatorio
- Admin notificado de cada nuevo post

#### FR-COM002: Feed de comunidad

El sistema shall mostrar un feed en tiempo real de posts.

**Por cada post muestra:**
- Avatar y nombre de usuario
- Badge de categoría (emoji + nombre con color)
- Timestamp
- Texto del mensaje
- Galería de fotos
- Botones de voto (👍👎)
- Botón de responder
- Botones editar/eliminar (solo autor o admin)

**Acciones:**
- Filtrar por categoría
- Buscar por keyword
- Votar (upvote/downvote toggle, mutuamente excluyentes)
- Responder a posts
- Editar posts propios
- Eliminar posts propios

#### FR-COM003: Sistema de respuestas (threading)

El sistema shall permitir respuestas anidadas a posts.

**Inputs:** Texto + fotos opcionales
**Output:** Respuesta anidada bajo el post padre con su propio sistema de votos

**Reglas de negocio:**
- Respuestas almacenadas como array dentro del post padre
- Cada respuesta tiene ID, texto, usuario, timestamp, votos
- Admin notificado cuando un post recibe respuesta

#### FR-COM004: Sistema de notificaciones

El sistema shall notificar a usuarios sobre interacciones relevantes.

**Tipos de notificación:**
- Alguien votó tu post/respuesta
- Alguien respondió a tu post
- Alguien dejó una reseña de producto
- Admin creó contenido nuevo

**Funcionalidad:**
- Badge con contador de no leídas
- Lista de últimas 10 notificaciones
- Click navega al contenido relacionado (con efecto highlight 3s)
- Se marca como leída al hacer click
- Actualización en tiempo real

---

### 4.10 Biblioteca de Notas (F-10)

**Prioridad:** Should Have

#### FR-BIB001: Catálogo de notas

El sistema shall mostrar una biblioteca de guías técnicas filtrable.

**Por cada nota muestra:**
- Ícono
- Título
- Categoría
- Resumen/extracto
- Fecha de publicación
- Botones de voto (👍👎)

**Acciones:**
- Filtrar por categoría
- Buscar por keyword
- Click para ver contenido completo
- Votar utilidad

#### FR-BIB002: Vista completa de nota

El sistema shall mostrar el contenido completo con multimedia integrada.

**Muestra:**
- Título centrado
- Categoría
- Contenido con formato (markdown-like)
- Imágenes embebidas (tags [FOTO1], [FOTO2] reemplazados por imágenes reales)
- Imágenes clickeables para zoom
- Botones de voto

#### FR-BIB003: Sugerencia de nueva nota

El sistema shall permitir a usuarios sugerir contenido nuevo para la biblioteca.

**Inputs:**
- Título
- Categoría
- Resumen
- Contenido completo
- Fotos (múltiples)
- Tags de posición de fotos ([FOTO1], etc.)

**Reglas de negocio:**
- Login requerido
- Todos los campos obligatorios
- Se envía a cola de moderación (admin aprueba/rechaza)
- Tras aprobación, migra a biblioteca pública

#### FR-BIB004: Votación de notas

El sistema shall permitir votación comunitaria sobre la utilidad de cada nota.

**Reglas:**
- Un voto por usuario por nota (toggle)
- Upvote y downvote mutuamente excluyentes
- Votos generan notificación para admin

---

### 4.11 Recetarios (F-11)

**Prioridad:** Should Have

#### FR-REC001: Galería de recetarios por marca

El sistema shall mostrar tablas de nutrición de diferentes marcas.

**Por cada recetario muestra:**
- Nombre de marca
- Imagen de la tabla de alimentación
- Botón "Descargar tabla" (link a PDF o imagen)

**Acciones:**
- Navegar grid de marcas
- Click para ver tabla ampliada
- Descargar PDF/imagen
- Navegar múltiples imágenes si la marca tiene varias

#### FR-REC002: Solicitar recetario faltante

El sistema shall permitir a usuarios solicitar tablas de marcas no incluidas.

**Inputs:**
- Nombre de marca (obligatorio)
- Línea de producto (opcional)
- Contacto (opcional)

**Reglas de negocio:**
- Login requerido
- Admin recibe notificación
- Admin puede marcar como procesada

---

### 4.12 Panel de Administración (F-12)

**Prioridad:** Must Have

#### FR-ADM001: Moderación de contenido

El sistema shall proveer un panel de administración para gestionar contenido de usuarios.

**Vistas:**
- Todo el contenido (mixto)
- Solo posts de comunidad
- Solo reseñas de productos
- Solo sugerencias de notas
- Solo solicitudes de tablas

**Por cada item muestra:**
- Tipo (badge: COMUNIDAD, RESEÑA, NOTA, SOLICITUD)
- Usuario
- Timestamp
- Preview del contenido
- Botones de acción

**Acciones:**
- Ver contenido completo
- Eliminar (con confirmación)
- Aprobar sugerencias de notas (mueve a biblioteca pública)
- Procesar solicitudes de tablas

**Reglas de negocio:**
- Solo accesible para rol Admin
- Eliminación permanente (sin soft-delete en v1)
- Al eliminar contenido, se limpian notificaciones asociadas

---

### 4.13 Bot de Inventario (F-13)

**Prioridad:** Should Have

#### FR-BOT001: Importación automática desde Mercado Libre

El sistema shall extraer datos de productos desde Mercado Libre por URL o ID.

**Inputs:**
- URL de Mercado Libre, ID de producto, o código corto (meli.la)

**Output (auto-poblado):**
- Título
- Precio
- Categoría
- Imágenes
- Descripción
- Atributos/especificaciones
- Link a Mercado Libre

**Acciones:**
- Pegar link → Bot extrae datos
- Revisar/editar campos auto-poblados
- Subir a base de datos
- Eliminar producto

**Reglas de negocio:**
- Solo accesible para Admin
- Cloud Function maneja OAuth y extracción (keys nunca en cliente)
- Resolución inteligente de URLs (short links, redirects)
- Manejo de imágenes fallback para datos faltantes

#### FR-BOT002: Tabla de inventario

El sistema shall mostrar todos los productos en base de datos con opciones de gestión.

**Muestra por producto:**
- ID, categoría, título, precio, link, preview de imagen
- Botones editar/eliminar

---

## 5. Requerimientos No Funcionales

### 5.1 Rendimiento

| ID | Requerimiento |
|----|---------------|
| NFR-001 | El sistema shall responder a búsquedas de catálogo en menos de 500ms bajo carga normal |
| NFR-002 | El diagnóstico IA (texto) shall completarse en menos de 10 segundos |
| NFR-003 | El diagnóstico IA (imagen) shall completarse en menos de 15 segundos |
| NFR-004 | Las calculadoras shall producir resultados en menos de 100ms (client-side) |
| NFR-005 | La compresión de imágenes shall reducir archivos a máximo 800px de ancho |

### 5.2 Seguridad

| ID | Requerimiento |
|----|---------------|
| NFR-006 | API keys de servicios externos shall estar exclusivamente en el backend (nunca en código cliente) |
| NFR-007 | Datos de seguimiento/diario shall ser privados por usuario (aislamiento a nivel de base de datos) |
| NFR-008 | El sistema shall implementar autenticación para acciones de escritura |
| NFR-009 | El panel de admin shall validar rol del usuario en cada request (server-side) |
| NFR-010 | El sistema shall sanitizar todo input de usuario para prevenir XSS |
| NFR-011 | Las Cloud Functions / API routes shall implementar CORS restringido al dominio de producción |

### 5.3 Disponibilidad

| ID | Requerimiento |
|----|---------------|
| NFR-012 | El sistema shall funcionar en modo degradado si APIs externas fallan (caché local como fallback) |
| NFR-013 | El sistema shall implementar retry con backoff exponencial para llamadas a servicios externos (máximo 3 intentos) |
| NFR-014 | El sistema shall proveer un health check que reporte estado de cada integración |

### 5.4 Usabilidad

| ID | Requerimiento |
|----|---------------|
| NFR-015 | El sistema shall ser responsive y funcional en pantallas desde 360px de ancho |
| NFR-016 | Las notificaciones toast shall auto-descartarse después de 4 segundos |
| NFR-017 | El sistema shall persistir el estado del carrito entre sesiones |
| NFR-018 | El sistema shall recordar la última sección visitada por el usuario |

### 5.5 Escalabilidad

| ID | Requerimiento |
|----|---------------|
| NFR-019 | Las consultas a base de datos shall implementar paginación (cursor-based) |
| NFR-020 | Las Cloud Functions / API routes shall tener límite de instancias concurrentes configurable |

---

## 6. Casos de Uso Principales

### UC-001: Cultivador diagnostica problema en planta con foto

**Actor:** Cultivador (autenticado)
**Precondición:** Usuario tiene foto de la planta con síntomas visibles

**Flujo principal:**
1. Usuario navega a sección Oráculo/Detector
2. Usuario selecciona modo "Subir foto"
3. Sistema muestra zona de carga
4. Usuario sube foto desde dispositivo
5. Sistema comprime imagen a 800px máximo
6. Sistema envía imagen a backend (Cloud Function / API route)
7. Backend procesa con Gemini Vision (multimodal)
8. Sistema muestra diagnóstico: nombre del problema, confianza %, pH/EC recomendados, protocolo de solución
9. Usuario puede guardar diagnóstico en su diario de cultivo

**Flujos alternativos:**
- 7a. API falla → Sistema muestra error amigable y sugiere intentar de nuevo
- 7b. Imagen no reconocible → Sistema indica baja confianza y sugiere mejor foto

---

### UC-002: Cultivador registra semana de seguimiento

**Actor:** Cultivador (autenticado)
**Precondición:** Usuario tiene planta en seguimiento

**Flujo principal:**
1. Usuario navega a Diario de Cultivo
2. Usuario selecciona planta existente o crea nueva
3. Sistema auto-incrementa número de semana
4. Usuario ingresa: pH, EC, temperatura, humedad, etapa, observaciones
5. Usuario sube fotos (opcionales)
6. Sistema comprime fotos y guarda entrada
7. Entrada aparece en la tabla de seguimiento de la planta

**Flujos alternativos:**
- 2a. Primera vez → Usuario crea planta con nombre
- 6a. Sin conexión → Sistema guarda localmente y sincroniza después

---

### UC-003: Cultivador calcula VPD para ajustar ambiente

**Actor:** Cultivador
**Precondición:** Usuario tiene mediciones de temperatura y humedad

**Flujo principal:**
1. Usuario navega a Laboratorio → Calculadoras
2. Usuario selecciona Calculadora VPD
3. Usuario ingresa temperatura y humedad
4. Sistema calcula VPD instantáneamente
5. Sistema muestra valor, estado (bajo/óptimo/alto), y gráfico de zonas
6. Usuario selecciona semana de crecimiento
7. Sistema ajusta rangos ideales y marca posición actual en el gráfico
8. Usuario puede guardar resultado en diario

---

### UC-004: Admin importa producto desde Mercado Libre

**Actor:** Admin
**Precondición:** Admin tiene URL del producto en Mercado Libre

**Flujo principal:**
1. Admin navega a Bot de Inventario
2. Admin pega URL/ID del producto de ML
3. Sistema resuelve URL (maneja redirects, short links)
4. Backend obtiene token OAuth y consulta API de ML
5. Sistema auto-puebla: título, precio, imágenes, descripción, atributos
6. Admin revisa y ajusta datos si es necesario
7. Admin confirma carga
8. Producto aparece en el catálogo de la tienda

**Flujos alternativos:**
- 3a. URL inválida → Sistema muestra error descriptivo
- 4a. Token OAuth falla → Sistema reintenta con backoff
- 5a. Producto sin imágenes → Sistema usa imagen fallback

---

## 7. Trazabilidad MVP Super M → Citronela

| Feature Super M | Módulo origen | Requerimiento Citronela | Prioridad |
|----------------|---------------|------------------------|-----------|
| Tienda (grid + detalle + carrito) | tienda.js | FR-T001 a FR-T004 | Must |
| Calculadora VPD | herramientaslab.js | FR-VPD001 a FR-VPD003 | Must |
| Calculadora de Luz | herramientaslab.js | FR-LUZ001 a FR-LUZ003 | Should |
| Calculadora de Sustrato | herramientaslab.js | FR-SUS001 | Should |
| Diagnóstico pH/EC | herramientaslab.js | FR-PHEC001 a FR-PHEC002 | Must |
| Asistente de Mezcla | herramientaslab.js | FR-MIX001 | Could |
| Diario de Cultivo | diariodecultivo.js | FR-DIA001 a FR-DIA005 | Must |
| Oráculo / Detector | detector.html + functions | FR-ORA001 a FR-ORA004 | Must |
| Foro / Comunidad | comunidad.js | FR-COM001 a FR-COM004 | Must |
| Biblioteca de Notas | notas.js | FR-BIB001 a FR-BIB004 | Should |
| Recetarios | recetarios.js | FR-REC001 a FR-REC002 | Should |
| Panel Admin | comunidad.js (admin) | FR-ADM001 | Must |
| Bot de Inventario | changuito.js | FR-BOT001 a FR-BOT002 | Should |

---

## 8. Apéndice A — Datos de Referencia

### A.1 Tabla completa de etapas de crecimiento

| Semana | Etapa | pH min | pH max | EC min | EC max | VPD min | VPD max | N-P-K |
|--------|-------|--------|--------|--------|--------|---------|---------|-------|
| 1 | Plántula | 5.5 | 5.8 | 0.6 | 0.9 | 0.4 | 0.8 | 1-1-1 |
| 2 | Plántula tardía | 5.5 | 5.8 | 0.6 | 0.9 | 0.4 | 0.8 | 1-1-1 |
| 3 | Veg temprano | 5.8 | 6.0 | 1.0 | 1.2 | 0.8 | 1.0 | 3-1-2 |
| 4 | Veg pleno | 5.8 | 6.0 | 1.2 | 1.4 | 0.8 | 1.0 | 3-1-2 |
| 5 | Veg tardío | 5.8 | 6.0 | 1.2 | 1.4 | 0.8 | 1.1 | 3-1-2 |
| 6 | Transición | 6.0 | 6.2 | 1.4 | 1.6 | 1.0 | 1.3 | 2-1-2 |
| 7 | Pre-flora | 6.0 | 6.2 | 1.4 | 1.7 | 1.1 | 1.3 | 2-1-2 |
| 8 | Flora temprana | 6.2 | 6.3 | 1.6 | 2.0 | 1.1 | 1.5 | 1-2-3 |
| 9 | Flora plena | 6.2 | 6.3 | 1.8 | 2.2 | 1.3 | 1.6 | 1-2-3 |
| 10 | Engorde | 6.3 | 6.4 | 2.0 | 2.4 | 1.3 | 1.6 | 1-3-3 |
| 11 | Finish | 6.4 | 6.5 | 1.6 | 1.9 | 1.3 | 1.6 | 1-1-2 |
| 12 | Flush | 6.0 | 6.5 | 0.0 | 0.5 | 1.3 | 1.6 | 0-0-0 |

### A.2 Biblioteca base del Oráculo (20 diagnósticos)

**Deficiencias de micronutrientes:**
Nitrógeno, Fósforo, Potasio, Calcio, Magnesio, Hierro, Boro, Azufre, Zinc, Manganeso, Cobre, Molibdeno

**Excesos:**
Exceso de Nitrógeno, Quemadura de nutrientes

**Estrés ambiental:**
Quemadura de luz, Estrés térmico, Exceso de riego, Fluctuación de pH

**Plagas y enfermedades:**
Oídio (Powdery Mildew), Araña roja (Spider Mites)

### A.3 Categorías de la Tienda

| ID | Nombre | Ícono |
|----|--------|-------|
| carpas | Carpas | ⛺ |
| iluminacion | Iluminación | 💡 |
| nutrientes | Nutrientes | 🧪 |
| sustratos | Sustratos | 📦 |
| clima | Clima y Control | 🌡️ |
| hidroponia | Hidroponía | 🌊 |
| semillas | Semillas | 🌱 |

---

## 9. Apéndice B — Historial de Cambios

| Versión | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 2026-04-28 | Jesus Fleitas / Antigravity | Documento inicial — relevamiento funcional completo de Super M |

---

> **Nota:** Este documento es un DRAFT. Requiere validación con Santiago (stakeholder/dueño de Citronela) para confirmar prioridades, ajustar alcance, y definir roadmap de implementación. Los requerimientos marcados como "Could Have" son candidatos a descarte en v1 si no aportan valor inmediato.
